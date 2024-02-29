<script lang="ts">
    import { fade, slide } from 'svelte/transition'
    import TabBar from '@smui/tab-bar'
    import Tab, { Label } from '@smui/tab'
    import { getUserName, initialSetUserName, updateUserName } from '$lib/store/auth'

    export let data
    const {path, user} = data
    initialSetUserName()
    updateUserName(user)
    const userName = getUserName()

    const sitePath = new Map<string, string>([
    	['/', 'HOME'],
    	['/contents', 'Contents'],
    	['/tags', 'Tags'],
    ])

    // デザイン的におかしい
    const tabs:string[] = $userName === 'None' ? ['HOME'] : [...sitePath.values()]
    const copyArray:[string, string][] = [...sitePath]
    const valueToKey = (tab:string) => {
    	const searchObject:[string, string] | undefined = copyArray.find(([key, value]) => value == tab)
    	return searchObject ? searchObject[0] : '/'
    }

    // TODO: typescript adjust
    const reverseKeyArray = [...sitePath.keys()].reverse()
    const getKeypath = reverseKeyArray.find(key => path.includes(key))
    console.log(getKeypath)
    let active = sitePath.get(getKeypath)
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
