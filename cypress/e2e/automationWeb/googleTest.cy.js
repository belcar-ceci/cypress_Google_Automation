describe('Prueba de automatización de búsqueda en Google', () => {
    it('Buscar "automatización" en Google y encontrar el enlace de Wikipedia', () => {

      cy.visit('https://www.google.com/');
  
      cy.get('#L2AGLb').click();
      cy.get('#APjFqb').type('automatización', { force: true });

      cy.get('#APjFqb').type('{enter}');

      cy.contains('Wikipedia', { timeout: 10000 }).should('exist').click();
  
      cy.contains('Historia').scrollIntoView().click();
      cy.get('div#bodyContent').should('exist').contains('año 270').should('exist');
      
    });
    
  });