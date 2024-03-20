import {fetchContent} from '$lib/server/fetchContent'

export async function load() {
  const contentsLists: ContentsLists = await fetchContent()

  return {
    contentsLists,
  }
}
