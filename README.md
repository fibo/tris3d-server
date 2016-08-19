# tris3d-server

> Play tic tac toe in 3d.

[Setup](#setup) |
[Development](#development) |
[License](#license)

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
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
```

Install requirements

```bash
sudo apt-get install -y git nginx nodejs
sudo npm install npm -g
```

Clone this repo, install deps and build

```bash
git clone https://github.com/fibo/tris3d-server.git
cd tris3d-server
npm install --production
npm run postcss
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

### Email

This section describes setup done (only once) on Amazon SES. The email address
choosen for transaction emails is *play@tris3d.net*.

1. Add domain *tris3d.net* and verify it, add also MX record.
2. Create a rule set to store emails into S3 bucket *s3://tris3d/emails/*.
3. Add email address and verify it, getting the link from email stored in S3 bucket.

## Development

Start the server in debug mode

```bash
export DEBUG=tris3d-server
node server
```

Then point your browser to http://localhost:3000/

To start postcss in watch mode, launch

```bash
npm run watch_postcss
```

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

