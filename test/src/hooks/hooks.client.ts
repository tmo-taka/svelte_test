import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public';
import {createClient} from "@sanity/client";

const client = createClient({
    projectId: PUBLIC_SANITY_PROJECT_ID,
    dataset: PUBLIC_SANITY_DATASET,
    apiVersion: "2023-12-29",
    useCdn: true,
})

export const authUser = async(params:{userName: string, passWord: string}) => {
    try {
        const data = await client.fetch(`*[_type == "auth" && user == "${params.userName}" && password == "${params.passWord}"][0]`);
        return data;
    } catch(e) {
        throw e;
    }
}