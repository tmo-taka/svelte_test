import { error } from '@sveltejs/kit';

export async function load({url, data}) {
    if(url.pathname != '/') {
        console.log(data.user);
        if(!data.user) {
            error(404, 'not logged in');
        }
    }
    return {
        path: url.pathname,
        user: data.user
    }
}