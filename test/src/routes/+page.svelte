<script lang="ts">
    import Form from '$lib/components/Form.svelte'
    import Button from '$lib/components/Button.svelte';
    import ContentLists from '$lib/components/ContentLists.svelte';
    import { authUser }from '../hooks/hooks.client';
    import { name } from '$lib/store/auth';

    export let data: {contentsLists: ContentsLists};

    const postApi = async() => {
        const params = {
            userName,
            passWord
        }
        try {
            const data = await authUser(params);
            console.log(data);
            // NOTE: ログインできた場合
            if(data) {
                name.set(data.user);
                name.subscribe((value) => {
                    console.log(value);
                });
                alert = ''
            }
            else {
                alert = 'ユーザー名かパスワードが間違えています。'
            }
        } catch (e) {
            throw e
        }
    }

    let userName = '';
    let passWord = '';

    let count = 0;
    let alert = ''
    $: triple = count * 3;

    const addCount = () => {
        count++
    }
    const removeCount =() => {
        count--
    }

</script>

<div>
    <h1>これはブログです</h1>

    <section>
        <h2>ログインフォーム</h2>
        <form>
            <Form label={'ユーザー名'} value={userName} ico='person' on:updateValue={e => userName = e.detail} />
            <Form label={'パスワード'} value={passWord} ico='key' on:updateValue={e => passWord = e.detail} />
            {#if alert !== ''}
                <div>{alert}</div>
            {/if}
            <Button on:clickButton={postApi}>ログイン</Button>
        </form>
    </section>

    <section>
        <h2>記事一覧</h2>
        <ContentLists lists={data.contentsLists} />
    </section>
</div>

