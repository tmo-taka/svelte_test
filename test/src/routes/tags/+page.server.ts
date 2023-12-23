import { fetchTags } from "../../hooks/hooks.server";

export async function load() {
    const data:TagLists = await fetchTags();

    return {
        tags: data
    };
}