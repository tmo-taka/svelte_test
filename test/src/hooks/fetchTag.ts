import { SANITY_PROJECT_ID, SANITY_DATASET } from '$env/static/private';
import {createClient} from "@sanity/client";

const client = createClient({
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
    apiVersion: "2023-10-05",
    useCdn: false
})

export const fetchTags = async() => {
    try {
        const data = await client.fetch(`*[_type == "tag"]`);
        return data;
    } catch(e) {
        console.log(e)
    }
}