# React Shopping Cart

This project runs a purchase experience simulation, and
purchases inside should only be taken as such, even if it uses Stripe for
payment, those are just inside the test environment of Stripe.

The stack used for this app is an approximation to the `create-react-app`
functional features, but not quite close. It is an entirely "made from scratch"
boilerplate, and I'm open to questions if you have any about this.

The main stack used (for which you can use `yarn add --exact` and the `-D` flag if the dependency is for development) for this was:

- React
- React Router
- Redux
- Ducks (actually a pattern)
- Redux Observable
- RxJS
- Styled Components
- Stripe
- Babel
- Webpack
- Express

You can check all of them in the `package.json` file.

The idea is to be able to search through the `https://rawg.io` REST API
and simulate a charge/payment on the Stripe platform with the info in there.

The objective is to show two lists of games, to be able to search games and
finally, purchase them, storing purchases in the Redux Store locally, until
the page reloads.

Furthermore, the next steps for future updates, I'll add the shopping cart list,
the gifts list and the wish list, but this is out of the current scopes. For now, purchasing a game and showing them is the priority.

## Technical test:

- Ducks ✔️
- REST API Consuming (RAWG API) ✔️
- `redux-observable` ✔️
- React Router ✔️ (although only one page, it renders the appropiate home page
  components)

## Pending:

- Complete the payment flow
- Add wishlist
- Add gifts
- Add shopping cart
