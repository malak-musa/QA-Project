describe('Search Functionality', () => {
  beforeEach(() => {
    // Visit the page where the search component is located
    cy.visit('https://stacksinfo.web.app');
  });
  
  it('Selects the Frontend filter', () => {
    cy.get('.filter-button').click();
    // Click the Frontend checkbox to apply the filter
    // We locate the Frontend label and click the associated checkbox
    cy.contains('span', 'Backend').parent().find('input[type="checkbox"]').click({ force: true });

    // Verify that the Frontend checkbox is checked
    cy.contains('span', 'Backend').parent().find('input[type="checkbox"]').should('be.checked');

    // Additional verification steps can be added here
    // For example, you might check that the list of items displayed on the page has been updated accordingly
    // This will depend on how your application responds to the filter being applied
  });
    
  });
