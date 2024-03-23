import {authUser} from '../../../hooks/hooks.server'
import type {RequestHandler} from './$types'

type Parameters = {
  userName: string
}

export const POST: RequestHandler = async ({request}) => {
  const parameters: Parameters = await request.json()
  // TODO: null or SuccessPattern の型を作成
  if (parameters.userName) {
    const headers = new Headers({
      'Set-Cookie': `user=${parameters.userName}; Max-Age=36000; path=/; Secure`,
    })
    const options = {
      status: 200,
      statusText: 'OK',
      headers,
    }
    const response = new Response('成功', options)
    return response
  }

  return new Response('不正なアクセスです')
}
