import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.get('/endpoint')
  .then(response => {
    // Manipule a resposta bem-sucedida aqui
    console.log(response.data);
  })
  .catch(error => {
    // Manipule o erro aqui
    if (error.response) {
      // O servidor retornou um status de erro
      console.log(error.response.data);
      console.log(error.response.status);
    } else if (error.request) {
      // A solicitação foi feita, mas não recebeu resposta
      console.log(error.request);
    } else {
      // Ocorreu um erro durante a solicitação
      console.log('Erro', error.message);
    }
    console.log(error.config);
  });

export default api;
