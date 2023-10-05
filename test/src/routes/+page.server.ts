import { API_KEY, API_BASE_URL } from '$env/static/private';
import {createClient} from "@sanity/client";

const client = createClient({
    projectId: 'c1ruzi4o',
    dataset: 'production',
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