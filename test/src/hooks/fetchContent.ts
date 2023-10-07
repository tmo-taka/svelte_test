import { SANITY_PROJECT_ID, SANITY_DATASET } from '$env/static/private';
import {createClient} from "@sanity/client";

const client = createClient({
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
    apiVersion: "2023-10-05",
    useCdn: false
})

export const fetchContents = async() => {
    try {
        const data = await client.fetch(`*[_type == "content"]`);
        return data;
    } catch(e) {
        console.log(e)
    }
}

export const fetchContentFromSlug = async(slug:string) => {
    try {
        const data = await client.fetch(`*[_type == "content" && slug.current == "${slug}"]`);
        return data;
    } catch(e) {
        console.log(e)
    }
}