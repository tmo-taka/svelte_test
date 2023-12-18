import { fetch } from '$lib/server/fetchContent';

export async function load() {
    const contentsLists = await fetch();
    console.log(contentsLists);

    return {
        contentsLists
    };
}