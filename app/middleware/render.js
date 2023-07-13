const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')
function createRenderer() {
  const serverBundle = require(path.resolve(__dirname, '../public/vue-ssr-server-bundle.json'))
  const clientManifest = require(path.resolve(__dirname, '../public/vue-ssr-client-manifest.json'))
  const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Hello</title>
        </head>
        <body>
          <!--vue-ssr-outlet-->
        </body>
      </html>`,
      clientManifest,
  })
  return renderer
}
const renderer = createRenderer()

module.exports = (options) => {
  return async function render(ctx, next) {
    await next()
    if (ctx.status !== 404) {
      return;
    }
    const context = { url: ctx.request.url }

    try {
      const html = await renderer.renderToString(context)
      ctx.headers['Content-Type'] = 'text/html'
      ctx.status = 200
      ctx.body = html
      console.log(123123)
    } catch (err) {
      if (err.code === 404) {
        ctx.status = 404
        ctx.body = 'Page Not Found'
      } else {
        ctx.status = 500
        ctx.body = 'Internal Server Error'
      }
      console.log(err)
    }
  }
}