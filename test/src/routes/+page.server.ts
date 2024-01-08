import { fetch } from '$lib/server/fetchContent';
import { authUser } from '../hooks/hooks.server';
import { setContext } from 'svelte';

export async function load() {
    const contentsLists:ContentsLists = await fetch();

    return {
        contentsLists
    };
}

export const actions = {
    // NOTE: ログイン処理
	login: async ({request, cookies}) => {;
        const data = await request.formData();
        const userName = data.get('userName');
        const passWord = data.get('passWord');
        const params = {
            userName,
            passWord
        }
		try {
            const data = await authUser(params);
            console.log(data);
            // NOTE: ログインできた場合
            if(data) {
                cookies.set('userName', data.user);
                return { success: true };
            }
            else {
                return { success: false, alert: 'ユーザー名かパスワードが間違えています。' };
            }
        } catch (e) {
            throw e
        }
	}
};