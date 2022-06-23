const baseUrl = process.env.REACT_APP_API_URL;

const fetchSinToken = ( endpoint, data, method='GET') => {
  const url = `${ baseUrl }/${ endpoint }`;

  console.log('url' + url)
  console.log('data ', data)
  console.log(typeof(data))
  console.log(JSON.stringify(data))
  console.log(typeof(JSON.stringify(data)))


  console.log(method)
  if ( method === 'GET'){
    return fetch ( url )
  } else {
    return fetch ( url, {
      method,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify ( data )
    })
  }
}

export {
  fetchSinToken
}