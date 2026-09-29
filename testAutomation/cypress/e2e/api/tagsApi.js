class TagsApi {
  getTags() {
    return cy.request({
      method: 'GET',
      url: 'http://localhost:3001/api/tags',
    });
  }
}

export default new TagsApi();
