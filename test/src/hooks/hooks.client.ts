export async function handleError({ error, event, status, message }) {
	const errorId = '2222'
    console.log('era-');

	return {
		message: 'Whoops!',
		errorId
	};
}