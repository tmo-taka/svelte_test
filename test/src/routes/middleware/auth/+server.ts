export async function POST({request, cookies}) {
  await console.log('auth', request)
  const s = await cookies.get('user')
  await console.log('auth2', s)
  const options = {
    status: 200,
    statusText: 'OK',
  }
  const response = new Response('成功', options)
  return response
}
