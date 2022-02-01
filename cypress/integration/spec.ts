it('test', () => {
   cy.visit('https://the-internet.herokuapp.com/exit_intent')

   cy.root()
      .trigger('mouseleave', 0, 0)
});
