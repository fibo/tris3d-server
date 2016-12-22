# ![logo](./public/tris3d.png) tris3d-server

> Play tic tac toe in 3d.

[Setup](#setup) |
[Development](#development) |
[License](#license)

[![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](http://stackshare.io/fibo/tris3d)

See [presentation slides on gdocs][tris3d-gdocs].

## Setup

### Server

First of all create an Ubuntu server and configure its domain to
play.tris3d.net on Cloudflare.

Commands are executed with a user, for instance *pippo*, in the sudo group.
Login as *root*, create *pippo* user, then add it to the *sudo* group with

```bash
adduser pippo sudo
```

Now you can login as user *pippo* and perform all other steps.

Start updating and upgrading all packages

```bash
sudo apt-get update -y
sudo apt-get upgrade -y
```

When grub prompt will appear, just hit <kbd>enter</kbd> and choose default
**Keep the local version currently installed** option.

Following [Installation instructions from NodeSource](https://github.com/nodesource/distributions#debinstall)

```bash
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
```

Install requirements

```bash
sudo apt-get install -y git nginx nodejs
```

Create tris3d-server folder

```bash
sudo mkdir /opt/tris3d-server
sudo chmod o-rwx /opt/tris3d-server
sudo chown $USER /opt/tris3d-server
```

Clone this repo, install deps

```bash
cd /opt
git clone https://github.com/fibo/tris3d-server.git
cd tris3d-server
npm install --production
sudo npm install forever -g
```

Copy nginx conf and reload it

```bash
sudo cp server-files/etc/nginx/conf.d/tris3d.conf /etc/nginx/conf.d/
sudo service nginx reload
```

Copy tris3d service and make it start at boot

```bash
# Generate tris3d init script
cat server-files/etc/init.d/tris3d | perl -ple 's/USER/$ENV{USER}/' > /tmp/tris3d
chmod +x /tmp/tris3d
sudo cp /tmp/tris3d /etc/init.d
rm /tmp/tris3d
# Create sym links
sudo ln -s /etc/init.d/tris3d /etc/rc0.d/K99tris3d
sudo ln -s /etc/init.d/tris3d /etc/rc1.d/K99tris3d
sudo ln -s /etc/init.d/tris3d /etc/rc2.d/S99tris3d
sudo ln -s /etc/init.d/tris3d /etc/rc3.d/S99tris3d
sudo ln -s /etc/init.d/tris3d /etc/rc4.d/S99tris3d
sudo ln -s /etc/init.d/tris3d /etc/rc5.d/S99tris3d
sudo ln -s /etc/init.d/tris3d /etc/rc6.d/K99tris3d
```

Start the server

```bash
sudo service tris3d start
```

## Development

Start the server in debug mode

```bash
export DEBUG=tris3d-server
node server
```

Then point your browser to http://localhost:3000/

You may also want to run webpack watching for file changes, then in another shell

```bash
npm run watch_webpack
```

Run tests as usual

```bash
npm test
```

Lint both JavaScript and CSS sources by launching

```bash
npm run lint
```

Publish a new version, it will build *bundle.js* and *style.css*

```bash
npm version minor
```

## License

[MIT](http://g14n.info/mit-license)

[tris3d-gdocs]: https://docs.google.com/presentation/d/1QeQhXwDpN4OgD7OyFOIklYKP2bFXbtDnuKotg0VJBfY/edit?usp=sharing "Tris3d presentation slides"
