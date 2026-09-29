import tagsApi from './tagsApi';

describe('Testes de API', () => {

  it('Deve buscar as tags com sucesso', () => {

    tagsApi.getTags().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('tags');
      expect(response.body.tags).to.be.an('array');
    });

  });

});