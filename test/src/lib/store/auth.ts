import {writable, type Writable} from 'svelte/store'
import {getContext, setContext, hasContext} from 'svelte'

type Context = Writable<string>

// NOTE: セキュリティリスクのためexportしない
// https://github.com/sveltejs/kit/issues/8614
const name = writable('None')

export const setUserName = (newUserName?: string) => {
  if (newUserName) {
    name.set(newUserName)
  }

  setContext('user', name)
}

export const getUserName = (): Context => getContext<Context>('user')

// export const updateUserName = (newUserName?: string) => {
//   if (newUserName) {
//     name.set(newUserName)
//     setContext('userName', name)
//   }
// }
