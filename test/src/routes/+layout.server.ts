export async function load({cookies}) {
	return {
		user: await cookies.get('userName')
	};
}