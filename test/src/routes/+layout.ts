import {error} from '@sveltejs/kit'

type Data = {
  locals: {
    user?: string
  }
}

export async function load({url, data}: {url: URL; data: Data}) {
  return {
    path: url.pathname,
    locals: data.locals,
  }
}
