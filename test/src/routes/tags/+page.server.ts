import { fetchTags } from "../../hooks/hooks.server";

export async function load() {
    const data = await fetchTags();

    return {
        tags: data
    };
}