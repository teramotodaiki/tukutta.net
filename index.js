export default {
  fetch(request, env, ctx) {
    const html = `<!doctype html>
  <html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>tukutta.net</title>
  </head>
  <body>
    <h1>tukutta.net</h1>
    <p>Cloudflare Workers minimal HTML.</p>
  </body>
  </html>`;
    return new Response(html, {
      headers: { "content-type": "text/html; charset=UTF-8" },
    });
  },
};
