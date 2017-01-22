# ![logo](./public/tris3d.png) tris3d-server

> Play tic tac toe in 3d.

[Setup](#setup) |
[Deploy](#deploy) |
[Development](#development) |
[License](#license)

[![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](http://stackshare.io/fibo/tris3d)

See [presentation slides on gdocs][tris3d-gdocs].

## Setup

Install AWS cli and get keys with permission to push on S3 bucket *s3://play.tris3d.net*.

## Deploy

**TODO** deploy server with *now*

Update S3 bucket

```bash
npm run aws_s3_sync
```

## Development

Start the server in debug mode

```bash
export DEBUG=tris3d-server
npm start
```

You may also want to watch for file changes, then in another shell

```bash
npm run watch
```

Run tests as usual

```bash
npm test
```

Lint both JavaScript and CSS sources by launching

```bash
npm run lint
```

## License

[MIT](http://g14n.info/mit-license)

[tris3d-gdocs]: https://docs.google.com/presentation/d/1QeQhXwDpN4OgD7OyFOIklYKP2bFXbtDnuKotg0VJBfY/edit?usp=sharing "Tris3d presentation slides"
