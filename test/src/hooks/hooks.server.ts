import {createClient} from '@sanity/client'
import type {Handle} from '@sveltejs/kit'
import {SANITY_PROJECT_ID, SANITY_DATASET} from '$env/static/private'

const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: '2023-12-18',
  useCdn: false,
})

type SanityReturned = ReturnType<typeof createClient> | undefined

export const handle: Handle = async ({event, resolve}) => {
  const currentDir = new URL(event.url)
  // const cookieValue = await event.cookies.get('userName')
  const isAPIUrl: boolean =
    currentDir.pathname.includes('/middleware') ||
    currentDir.pathname.includes('/api')
  const isTopUrl: boolean = currentDir.pathname === '/'
  const response = await resolve(event)
  if (isAPIUrl) {
    // NOTE: APIの場合は循環させないようにレスポンスを返す
    return response
  }

  // NOTE: APIの場合は循環させないようにレスポンスを返す
  const cookie = await event.cookies.get('user')
  console.log('cookie', cookie)
  if (cookie) {
    // cookieがある場合
    event.locals.user = cookie
    const _response = await resolve(event)
    return _response
  }

  if (isTopUrl) {
    return response
  }

  return response
}

export const fetchContents = async (): Promise<SanityReturned> => {
  try {
    const data = await client.fetch(
      '*[_type == "content" && published == true]',
    )
    return data
  } catch (error) {
    console.log(error)
    throw new Error('era')
  }
}

export const fetchContentFromSlug = async (
  slug: string,
): Promise<SanityReturned> => {
  try {
    const data =
      await client.fetch(`*[_type == "content" && slug.current == "${slug}"]{
            title,
            slug,
            published,
            "imageUrl" :mainVisual.asset->url,
            tags[]->
        }[0]`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const fetchContentFromTag = async (): Promise<ContentsLists> => {
  try {
    const data = await client.fetch(`*[_type == "content" && published == true]{
            title,
            slug,
            "imageUrl" :mainVisual.asset->url,
            tags[] -> {id}
        }`)
    return data
  } catch (error) {
    throw error
  }
}

export const fetchTags = async (): Promise<TagsLists> => {
  try {
    const data = await client.fetch('*[_type == "tag"]')
    return data
  } catch (error: unknown) {
    throw error
  }
}

export const authUser = async (parameters: {
  userName: string
  passWord: string
}) => {
  try {
    const data = await client.fetch(
      `*[_type == "auth" && user == "${parameters.userName}" && password == "${parameters.passWord}"][0]`,
    )
    return data
  } catch (error: unknown) {
    throw error
  }
}

export async function handleError({error}) {
  console.log(error)
  return {
    message: error,
  }
}
