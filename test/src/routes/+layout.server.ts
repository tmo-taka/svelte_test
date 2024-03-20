// import {type Cookies} from '@sveltejs/kit'

export async function load({locals}) {
  return {
    locals,
  }
}
