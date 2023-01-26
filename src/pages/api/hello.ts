const handler = (): Response => {
  return new Response('Hello World!!', {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  })
}

export default handler
