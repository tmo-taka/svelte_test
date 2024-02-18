import type {ServerLoad} from '@sveltejs/kit'
import {fetchContentFromSlug} from '../../../hooks/hooks.server'

export const load: ServerLoad = async ({params}) => {
  // NOTE: loadの返り値はオブジェクトでないといけない
  console.log(params)
  const {slug} = params
  const content = slug ? await fetchContentFromSlug(slug) : 'data'
  console.log(content)
  return {content}
}
