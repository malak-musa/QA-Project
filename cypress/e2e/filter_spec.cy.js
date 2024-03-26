describe('Filter Component Tests', () => {
  beforeEach(() => {
    // Adjust this URL to match your application's URL
    cy.visit('https://stacksinfo.web.app');

    // Click the button to show the filter options
    cy.get('.filter-button').click();
  });

  it('should select only one option at a time', () => {
    // Since your checkboxes might be hidden within dropdowns, ensure the dropdown is opened if necessary
    // This example clicks the first dropdown to open it, adjust the selector as needed
    cy.get('.filter-drowpdowns-container .dropdown:first .dropdown-title').click();

    // Check the checkbox for the "Backend" filter option
    // Adjust the selector if necessary, especially if more precise targeting is required
    cy.get('input[type="checkbox"]').then((checkboxes) => {
      // iterate throught checkboxes and click the one that is not checked
      checkboxes.each((index, checkbox) => {
        if (!checkbox.checked) {
          cy.wrap(checkbox).click();
          cy.wait(1000);
          cy.get('.Not-found-container').should('not.exist');
          cy.wait(1000);
          cy.wrap(checkbox).click();
        }
      });
    });
  });

  it('should clear filters when "Clear All" button is clicked', () => {
    // Since your checkboxes might be hidden within dropdowns, ensure the dropdown is opened if necessary
    // This example clicks the first dropdown to open it, adjust the selector as needed
    cy.get('.filter-drowpdowns-container .dropdown:first .dropdown-title').click();
    
    cy.get('input[type="checkbox"]').then((checkboxes) => {
      // iterate throught checkboxes and click the one that is not checked
      checkboxes.each((index, checkbox) => {
        if (!checkbox.checked) {
          cy.wrap(checkbox).click();
          cy.wait(500);
        }
      });
      // Click the "Clear All" button
      cy.get('.clear-all-btn').click();
      // Check if all checkboxes are unchecked
      checkboxes.each((index, checkbox) => {
        expect(checkbox.checked).to.be.false;
      });
    });
  });

  it('should clear filters when "Reset Filters" button is clicked', () => {
    // Since your checkboxes might be hidden within dropdowns, ensure the dropdown is opened if necessary
    // This example clicks the first dropdown to open it, adjust the selector as needed
    cy.get('.filter-drowpdowns-container .dropdown:first .dropdown-title').click();
    
    cy.get('input[type="checkbox"]').then((checkboxes) => {
      // iterate throught checkboxes and click the one that is not checked
      checkboxes.each((index, checkbox) => {
        if (!checkbox.checked) {
          cy.wrap(checkbox).click();
          cy.wait(500);
        }
      });
      // Click the "Clear All" button
      cy.get('.reset-btn').click();
      // Check if all checkboxes are unchecked
      checkboxes.each((index, checkbox) => {
        expect(checkbox.checked).to.be.false;
      });
    });
  });
  
  it('should all options in the stack be checked', () => {
    // Since your checkboxes might be hidden within dropdowns, ensure the dropdown is opened if necessary
    // This example clicks the first dropdown to open it, adjust the selector as needed
    cy.get('.filter-drowpdowns-container .dropdown:first .dropdown-title').click();
    cy.get('input[type="checkbox"]').then((checkboxes) => {
      checkboxes[1].click();

    
    });
  });

});
