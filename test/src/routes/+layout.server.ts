// import {type Cookies} from '@sveltejs/kit'
import {name} from '$lib/store/auth'

export async function load({locals}) {
  return {
    locals,
  }
}
