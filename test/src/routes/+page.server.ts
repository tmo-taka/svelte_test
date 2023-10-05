import { SANITY_PROJECT_ID, SANITY_DATASET } from '$env/static/private';
import {createClient} from "@sanity/client";

const client = createClient({
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
    apiVersion: "2023-10-05",
    useCdn: false
})

export async function load({parent}) {
    const data = await client.fetch(`*[_type == "content"]`);

    const { a } = await parent();

    return {
        a,
        contents: data
    };
}