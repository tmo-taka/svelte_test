import {setContext} from 'svelte'
import type {Actions, ServerLoad} from '@sveltejs/kit'
import {authUser} from '../hooks/hooks.server'
import {fetchContent} from '$lib/server/fetchContent'

export const load: ServerLoad = async () => {
  const contentsLists: ContentsLists = await fetchContent()

  return {
    contentsLists,
  }
}

export const actions: Actions = {
  // NOTE: ログイン処理
  async default({request, cookies}) {
    const requestUrl = new URL(request.url)
    const data = await request.formData()
    const userName = data.get('userName')
    const passWord = data.get('passWord')

    const parameters = {
      userName,
      passWord,
    }

    // TODO: null or SuccessPattern の型を作成
    const judgeLogin = await authUser(parameters)
    type Response = {
      success: boolean
      alert?: string
      userName?: string
    }
    const form: Response = {
      success: true,
    }
    if (judgeLogin) {
      form.userName = userName
    } else {
      form.success = false
      form.alert = 'ユーザー名かパスワードが間違えています。'
    }

    console.log(form)

    return form
  },
}
