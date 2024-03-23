import {error} from '@sveltejs/kit'

type Data = {
  locals: {
    user?: string
  }
}

export async function load({url, data}: {url: URL; data: Data}) {
  const path = url.pathname
  const locals = data.locals
  const isTop = path === '/'
  const isMiddleware = path.includes('/middleware/')
  console.log('localUser', locals?.user)
  if (!isTop && !isMiddleware && !locals?.user) {
    // NOTE: pathがTOP以外かつログイン状態でない場合
    error(404, {
      message: 'Not found',
    })
  }

  return {
    path,
    locals,
  }
}
