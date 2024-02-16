import {setContext} from 'svelte';
import {authUser} from '../hooks/hooks.server';
import {fetch} from '$lib/server/fetchContent';

export async function load() {
  const contentsLists: ContentsLists = await fetch();

  return {
    contentsLists,
  };
}

export const actions = {
  // NOTE: ログイン処理
  async login({request, cookies}) {
    const data = await request.formData();
    const userName = data.get('userName');
    const passWord = data.get('passWord');
    const parameters = {
      userName,
      passWord,
    };
    try {
      const data = await authUser(parameters);
      console.log(data);
      // NOTE: ログインできた場合
      if (data) {
        cookies.set('userName', data.user, {path: '/'});
        return {success: true};
      }

      return {
        success: false,
        alert: 'ユーザー名かパスワードが間違えています。',
      };
    } catch (error) {
      throw error;
    }
  },
};
