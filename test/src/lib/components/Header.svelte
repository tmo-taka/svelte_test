<script lang="ts">
  import TabBar from '@smui/tab-bar'
  import Tab, {Label} from '@smui/tab'
  import {setUserName, getUserName} from '$lib/store/auth'

  export let path: string
  export let localsUser: string | undefined

  setUserName(localsUser)

  const sitePath = new Map<string, string>([
    ['/', 'HOME'],
    ['/contents', 'Contents'],
    ['/tags', 'Tags'],
  ])

  const name = getUserName()

  // デザイン的におかしい
  // TODO: リアクティブにしたが型付けがまだ
  $: tabs = $name === 'None' ? ['HOME'] : [...sitePath.values()]
  const copyArray: [string, string][] = [...sitePath]
  const valueToKey = (tab: string) => {
    const searchObject: [string, string] | undefined = copyArray.find(
      ([key, value]) => value == tab,
    )
    return searchObject ? searchObject[0] : '/'
  }

  // TODO: typescript adjust
  const reverseKeyArray = [...sitePath.keys()].reverse()
  const getKeypath = reverseKeyArray.find((key) => path.includes(key))
  console.log(getKeypath)
  let active = sitePath.get(getKeypath)
</script>

<header class="header">
  <TabBar {tabs} let:tab bind:active>
    <Tab {tab} href={valueToKey(tab)}>
      <Label>
        {tab}
      </Label>
    </Tab>
  </TabBar>
  <div class="userBord">
    <i class="material-icons" aria-hidden="true">person</i>
    {$name}
  </div>
</header>

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
</style>
