import { error } from '@sveltejs/kit';

export async function load({url, data}) {
    if(url.pathname != '/') {
        if(!data.user) {
            // Svelte.kit(1系) ではthrowする
            throw error(404, 'not logged in');
        }
    }
    return {
        path: url.pathname,
        user: data.user
    }
}