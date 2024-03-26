describe('Search Functionality', () => {
  beforeEach(() => {
    // Visit the page where the search component is located
    cy.visit('https://stacksinfo.web.app');
  });

  it('should display search results for a valid query', () => {
    // Load fixture data for valid search queries
    cy.fixture('valid_search_queries.json').then((queries) => {
      queries.forEach((query) => {
        // Select the search bar element and type a query
        cy.get('.search-bar-container input.search-bar').type(query.body);

        // Trigger the search action by firing an input event
        cy.get('.search-bar-container input.search-bar').trigger('input');
                
        // Assert that the "Not found" message container appears
        cy.get('.Not-found-container').should('not.exist');
      });
    });
  });

  it('should not display search results for a invalid query', () => {
    // Load fixture data for valid search queries
    cy.fixture('invalid_search_queries.json').then((queries) => {
      queries.forEach((query) => {
        // Select the search bar element and type a query
        cy.get('.search-bar-container input.search-bar').type(query.body);

        // Trigger the search action by firing an input event
        cy.get('.search-bar-container input.search-bar').trigger('input');
                
        // Assert that the "Not found" message container appears
        cy.get('.Not-found-container').should('be.visible');
      });
    });
  });
});
