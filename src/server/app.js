const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const STATIC_ASSETS_PATH = path.join(__dirname, '..', '..', 'static');

const app = express();

app.use('/static', express.static(STATIC_ASSETS_PATH));

app.get('/', (_reg, res) => {
res.set('Content-Type', 'text/html; charset=utf-8');
res.send(`<!doctype html><html><body>
<div id-"container"></dev>
<script src="/static/bundle.js"></scripts>
</body></html>`);
});

app.listen(PORT, HOST, () => {
console.log('Serving static from:', STATIC_ASSETS_PATH);
console.log(`Example app listerning on http://${HOST}:${PORT}1`);
});
