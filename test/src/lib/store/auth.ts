import { writable, type Writable } from 'svelte/store';
import { getContext, setContext, hasContext } from 'svelte';

type Context = Writable<string>;

export const name = writable('None');

export const initialSetUserName = () => {
	const judgeHasContext: boolean = hasContext('userName');
	if (judgeHasContext) {
		let contextData;
		getUserName().subscribe(value => contextData = value);
		name.set(contextData);
	} else {
		name.set('None');
	}

	setContext('userName', name);
};

export const getUserName = (): Context => getContext<Context>('userName');

export const updateUserName = (newUserName?: string) => {
	if (newUserName) {
		name.set(newUserName);
		setContext('userName', name);
	}
};
