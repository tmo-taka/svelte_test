<script lang="ts">
  import {onMount} from 'svelte'
  import Form from '$lib/components/Form.svelte'
  import Button from '$lib/components/Button.svelte'
  import ContentLists from '$lib/components/ContentLists.svelte'
  import {getUserName, setUserName} from '$lib/store/auth'

  export let data: {contentsLists: ContentsLists}
  export let form: {success: boolean; alert?: string; userName?: string}

  onMount(async () => {
    if (form?.success) {
      await fetch('/middleware/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({userName: form.userName}),
      })
      setUserName(form.userName)
    }
  })

  const postApi = async () => {
    console.log('押された')
  }

  const name = getUserName()
  const loginFlag: boolean = name !== 'None'
  let userName = ''
  let passWord = ''
</script>

<div>
  <h1>これはブログです</h1>

  {#if loginFlag}
    <section>
      <h2>ログインフォーム</h2>
      <form method="POST">
        <Form
          label={'ユーザー名'}
          value={userName}
          ico="person"
          name="userName"
          on:updateValue={(e) => (userName = e.detail)}
        />
        <Form
          label={'パスワード'}
          value={passWord}
          ico="key"
          name="passWord"
          on:updateValue={(e) => (passWord = e.detail)}
        />
        {#if form?.alert}
          <div>{form.alert}</div>
        {/if}
        <Button on:clickButton={postApi}>ログイン</Button>
      </form>
    </section>
  {:else}
    <section>
      <h2>記事一覧</h2>
      <ContentLists lists={data.contentsLists} />
    </section>
  {/if}
</div>
