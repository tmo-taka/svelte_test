import { fetchContentFromTag } from "../../../hooks/fetchContent";

export async function load({params}) {
    // NOTE: loadの返り値はオブジェクトでないといけない
    console.log(params);
    const { slug } = params;
    const contents = await fetchContentFromTag();
    const filterContents = contents.filter((content) => {
        if(content.tags.length) {
            return content.tags.find(tag => tag.id.current === slug)
        }
    })
    return { filterContents }
}