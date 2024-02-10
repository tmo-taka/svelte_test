<script lang="ts">
    import { afterNavigate } from '$app/navigation';
    import { fade, slide } from 'svelte/transition'
    import TabBar from '@smui/tab-bar';
    import Tab, { Label }from '@smui/tab';
    import { getUserName, initialSetUserName, updateUserName } from '$lib/store/auth';

    export let data;
    const {user,path} = data;
    // cookieにデータがあった場合に格納
    if(user) {updateUserName(user)};
    // 初回のstore/contextの設定
    initialSetUserName();
    const userName = getUserName();

    const sitePath = new Map<string, string>([
        ['/','HOME'],
        ['/contents','Contents'],
        ['/tags','Tags'],
    ])

    // デザイン的におかしい
    const tabs:string[] = $userName !== 'None' ? [...sitePath.values()] : ['HOME'];
    const copyArr:[string,string][] = [...sitePath];
    const valueToKey = (tab:string) => {
        const searchObj:[string,string] | undefined = copyArr.find(([key, value]) => value == tab);
        return searchObj ? searchObj[0] : '/'
    };

    // TODO: typescript adjust
    const reverseKeyArr = [...sitePath.keys()].reverse();
    const getKeypath = reverseKeyArr.find(key => path.includes(key));
    console.log(getKeypath)
    let active = sitePath.get(getKeypath);

    // afterNavigate((navigation:AfterNavigate) => {
    //     const toPath = navigation.to.route?.id;
    //     if(toPath && toPath !== '/') {
    //         console.log($userName === 'None')
    //         if($userName === 'None') {
    //             console.log('haiatta');
    //             error(404, {message: 'Not found'})
    //         }
    //     }
    // })

</script>

<svelte:head>
	<title>svelteテスト</title>
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
</svelte:head>
<div>
    <header class="header">
        <TabBar tabs={tabs} let:tab bind:active>
            <Tab {tab} href={valueToKey(tab)}>
                <Label>
                    {tab}
                </Label>
            </Tab>
        </TabBar>
        <div class="userBord">
            <i class="material-icons" aria-hidden="true">person</i>
            { $userName }
        </div>
    </header>
    {#key data.path}
        <div
            in:fade={{ delay: 100 }}
            out:slide
            class="wrap"
        >
            <slot />
        </div>
    {/key}
</div>

<style>
    .header {
        text-align: right;
    }
    .userBord {
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
        color: #a260bf;
        border-bottom: solid 1px #a260bf;
    }
    i {
        margin-right: 8px;
    }
    .wrap {
        padding: 16px;
    }
</style>