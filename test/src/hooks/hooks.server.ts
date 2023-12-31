import { SANITY_PROJECT_ID, SANITY_DATASET } from '$env/static/private';
import {createClient} from "@sanity/client";

const client = createClient({
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
    apiVersion: "2023-12-18",
    useCdn: false
})

export const fetchContents = async() => {
    try {
        const data = await client.fetch(`*[_type == "content" && published == true]`);
        return data;
    } catch(e) {
        console.log(e)
    }
}

export const fetchContentFromSlug = async(slug:string) => {
    try {
        const data = await client.fetch(`*[_type == "content" && slug.current == "${slug}"]{
            title,
            slug,
            published,
            "imageUrl" :mainVisual.asset->url,
            tags[]->
        }[0]`);
        return data;
    } catch(e) {
        console.log(e)
    }
}

export const fetchContentFromTag = async() => {
    try {
        const data = await client.fetch(`*[_type == "content" && published == true]{
            title,
            slug,
            "imageUrl" :mainVisual.asset->url,
            tags[] -> {id}
        }`);
        return data;
    } catch(e) {
        console.log(e)
    }
}

export const fetchTags = async() => {
    try {
        const data = await client.fetch(`*[_type == "tag"]`);
        return data;
    } catch(e: unknown) {
        throw e
    }
}