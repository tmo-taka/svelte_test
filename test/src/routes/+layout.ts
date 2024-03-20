import {error} from '@sveltejs/kit'

type Data = {
  locals: {
    user?: string
  }
}

export async function load({url, data}: {url: URL; data: Data}) {
  const path = url.pathname
  const locals = data.locals
  if (path !== '/' && !locals?.user) {
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
