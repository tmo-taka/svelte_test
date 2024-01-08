import { writable, type Writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';

type Context = Writable<string>

export const name = writable('None')

export const initialSetUserName = () => setContext('userName',name);

export const getUserName = ():Context=> {
    return getContext<Context>('userName');
}

export const updateUserName = (newUserName?:string) => {
    if(newUserName) {
        name.set(newUserName);
        setContext('userName',name);
    }
}