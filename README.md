# tris3d-server

## Setup

### Server

First of all create an Ubuntu server and configure its domain to play.tris3d.net on Cloudflare.

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

When grub prompt will appear, just hit <kbd>enter</kbd> and choose default **Keep the local version currently installed** option.

Following [Installation instructions from NodeSource](https://github.com/nodesource/distributions#debinstall), tell *apt-get* to point to **Node v4.x**

```bash
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
```

Install requirements

```bash
sudo apt-get install -y git nginx nodejs
sudo npm install npm -g
```

Clone this repo and install deps

```bash
git clone https://github.com/fibo/tris3d-fb-app.git
cd tris3d-fb-app
npm install
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

### Facebook app

Go to the [Facebook app dashboard][fb-app-dashboard].

[fb-app-dashboard]: https://developers.facebook.com/apps/178205352555681 "Facebook app dashboard"

