import { fetchTags } from "../../hooks/fetchTag";

export async function load({parent}) {
    const data = await fetchTags();

    return {
        tags: data
    };
}