## Getting started

### Installing dependencies

```bash
npm install
```

### Installing pm2

```bash
npm install
npm install -g pm2
```

### Installing k6 for load testing

```bash
brew install k6
```

## Running the load test

### Static Next.js pages

#### Without PM2

```bash
npm run build
node .next/standalone/server.js
k6 run ./load-tests/static.js
```

#### With PM2

```bash
npm run build
pm2 start .next/standalone/server.js -i 0
k6 run ./load-tests/static.js
```

### Dynamic Next.js pages

#### Without PM2

```bash
npm run build
node .next/standalone/server.js
k6 run ./load-tests/dynamic.js
```

#### With PM2

```bash
npm run build
pm2 start .next/standalone/server.js -i 0
k6 run ./load-tests/dynamic.js
```
