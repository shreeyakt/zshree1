addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const clientIP = request.headers.get('CF-Connecting-IP');
  const userCountry = request.headers.get('CF-IPCountry');

  if (userCountry !== 'SG') {
  //Redirect users who are not from Singapore.
   return Response.redirect('https://1.1.1.1',302);
  }

  const asn = request.headers.get('CF-Connecting-ASN');
  const responseText = `This is your ${clientIP} and you are accessing this site from ${userCountry} | ${asn}`;

  return new Response(responseText, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}