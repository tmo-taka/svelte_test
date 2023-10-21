import { fetchContents } from "../hooks/fetchContent";

export async function load({parent}) {
    const data = await fetchContents();

    return {
        contents: data
    };
}