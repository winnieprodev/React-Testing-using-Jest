import pizzas from '../data';

test('the pizza data is correct', () => {
  expect(pizzas).toMatchSnapshot();
})