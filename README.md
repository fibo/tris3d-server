# tris3d-server

> Play tic tac toe in 3d.

[Setup](#setup) |
[Development](#development) |
[License](#license)

[![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](http://stackshare.io/fibo/tris3d)

## Setup

### Server

First of all create an Ubuntu server and configure its domain to
play.tris3d.net on Cloudflare.

Commands are executed with a user, for instance *pippo*, in the sudo group.
Login as *root*, create *pippo* user, then

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

Following [Installation instructions from NodeSource](https://github.com/nodesource/distributions#debinstall), tell *apt-get* to point to **Node v4.x**

```bash
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
```

Install requirements

```bash
sudo apt-get install -y git nginx nodejs
```

Clone this repo, install deps and build

```bash
git clone https://github.com/fibo/tris3d-server.git
cd tris3d-server
npm install --production
npm run webpack
```

Copy nginx conf and reload it

```bash
sudo cp server-files/etc/nginx/conf.d/tris3d.conf /etc/nginx/conf.d/
sudo service nginx reload
```

Start the server

```bash
npm start
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

Tests are run as usual

```bash
npm test
```

Lint both JavaScript and CSS sources by launching

```bash
npm run lint
```

## License

[MIT](http://g14n.info/mit-license)

