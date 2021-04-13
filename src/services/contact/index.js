async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  }).then((respostaDoServer) => {
    if (respostaDoServer.ok) {
      return respostaDoServer.json();
    }

    throw new Error(
      'Falha em pegar os dados do servidor, por favor tente mais tarde.'
    );
  });
}

export const contactService = {
  async send({ name, email, message }, HttpClientModule = HttpClient) {
    return HttpClientModule(
      `https://contact-form-api-jamstack.herokuapp.com/message`,
      {
        method: 'POST',
        body: {
          name,
          email,
          message,
        },
      }
    ).then((respostaConvertida) => respostaConvertida);
  },
};
