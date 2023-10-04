export async function load({params, parent}) {
    console.log(params);
    const { a, b } = await parent();
    return {
        post: {
            title: `これは${params.id}`
        },
        data: {
            a,
            b
        }
    }
}