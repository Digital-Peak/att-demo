describe('Joomla Digital Peak', () => {
	it('opens the front page and checks the title', () => {
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
