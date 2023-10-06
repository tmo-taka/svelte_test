export async function load({params}) {
    console.log(params);
    const {slug} = params;
    return {
        slug
    }
}