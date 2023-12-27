import { fetchTags } from "../../hooks/hooks.server";

export async function load() {
    const tagLists:TagLists = await fetchTags();

    return {
        tagLists
    };
}