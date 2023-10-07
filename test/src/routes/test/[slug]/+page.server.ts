import { fetchContentFromSlug } from "../../../hooks/fetchContent";

export async function load({params}) {
    // NOTE: loadの返り値はオブジェクトでないといけない
    console.log(params);
    const { slug } = params;
    const content = slug ? await fetchContentFromSlug(slug) : 'data'
    console.log(content);
    return { content }
}