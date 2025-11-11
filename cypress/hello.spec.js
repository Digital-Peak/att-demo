describe('Joomla Digital Peak', () => {
	it('checks the home page title and takes a screenshot', () => {
		cy.visit('https://joomla.digital-peak.com');

		cy.title().should('match', /Joomla Extensions/);
	});

	it('clicks the Subscribe link and checks navigation', () => {
		cy.visit('https://joomla.digital-peak.com');
		cy.contains('Subscribe').click();

		cy.title().should('match', /Subscribe/);
		cy.url().should('eq', 'https://joomla.digital-peak.com/subscribe');
	});
});
