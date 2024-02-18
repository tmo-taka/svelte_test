import {fetch} from '$lib/server/fetchContent'

export async function load() {
  const contentsLists: ContentsLists = await fetch()

  return {
    contentsLists,
  }
}
