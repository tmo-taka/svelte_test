import { fetchContents } from "../../hooks/hooks.server";

export const fetch = async() => {
    return await fetchContents();
}