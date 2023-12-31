import { writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';

export const name = writable('None')

export const initialSetUserName = () => setContext('userName',name);

export const updateUserName = (newUserName: string):void => {
    name.set(newUserName)
    setContext('userName', name);
}

export const getUserName = () => getContext('userName');