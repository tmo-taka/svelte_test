<script lang="ts">
    import { fade, slide } from 'svelte/transition'
    import TabBar from '@smui/tab-bar';
    import Tab, { Label }from '@smui/tab';
    export let data;
    const {path} = data;

    const sitePath = new Map<string, string>([
        ['/','HOME'],
        ['/contents','Contents'],
        ['/tags','Tags'],
    ])

    const tabs:string[] = Array.from(sitePath.values());

    const copyArr:[string,string][] = [...sitePath];
    const valueToKey = (tab:string) => {
        const searchObj:[string,string] | undefined = copyArr.find(([key, value]) => value == tab);
        return searchObj ? searchObj[0] : '/'
    };

    // TODO: typescript adjust
    let active: keyof typeof sitePath = sitePath.get(path) ?? sitePath.get('/');
</script>

<div>
    <TabBar tabs={tabs} let:tab bind:active>
        <Tab {tab} href={valueToKey(tab)}>
            <Label>
                {tab}
            </Label>
        </Tab>
    </TabBar>
    {#key data.path}
        <div
            in:fade={{ delay: 100 }}
            out:slide
        >
            <slot />
        </div>
    {/key}
</div>