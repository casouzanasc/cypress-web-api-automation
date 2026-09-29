describe('Testes de API', () => {

  it('Deve buscar as tags com sucesso', () => {

    cy.request({
      method: 'GET',
      url: 'http://localhost:3001/api/tags'
    }).then((response) => {

      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('tags');
      expect(response.body.tags).to.be.an('array');

    });

  });

});