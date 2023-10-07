import { fetchContents } from "../hooks/fetchContent";

export async function load({parent}) {
    const data = await fetchContents();
    const { a } = await parent();

    return {
        a,
        contents: data
    };
}