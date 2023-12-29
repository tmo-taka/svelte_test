import { writable } from "svelte/store";
import { getContext, setContext } from 'svelte';

export const initialSetUserName = () => setContext('userName','None');

export const updateUserName = (newUserName: string):void => {
    const userName = writable<string>(newUserName);
    setContext('userName', userName);
}

export const getUserName = () => getContext('userName');