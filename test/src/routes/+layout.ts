export async function load({url, data}) {
    return {
        path: url.pathname,
        user: data.user
    }
}