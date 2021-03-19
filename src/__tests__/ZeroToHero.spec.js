import pizzas from '../data';

test('the pizza data is correct', () => {
  expect(pizzas).toMatchSnapshot();
  expect(pizzas).toHaveLength(4);
  expect(pizzas.map(pizza => pizza.name)).toEqual([
    'Chicago Pizza',
    'Neapolitan Pizza',
    'New York Pizza',
    'Sicilian Pizza',
  ]);
});

for (let i = 0; i < pizzas.length; i += 1) {
  test(`pizza[$(i)] should have properties (id, name, image, desc, price)`, () => {
    expect(pizzas[i]).toHaveProperty('id');
    expect(pizzas[i]).toHaveProperty('name');
    expect(pizzas[i]).toHaveProperty('image');
    expect(pizzas[i]).toHaveProperty('desc');
    expect(pizzas[i]).toHaveProperty('price');
  });
}

test('mock implementation of a basic function ', () => {
  const mock = jest.fn(() => 'I am a mock function');
  expect(mock('Calling my mock function!')).toBe('I am a mock function');
  expect(mock).toHaveBeenCalledWith('Calling my mock function!');
  console.log(mock);
});

test('mock return value of a function one time', () => {
  const mock = jest.fn();

  mock.mockReturnValueOnce('Hello').mockReturnValueOnce('there!');

  mock();
  mock();

  expect(mock).toHaveBeenCalledTimes(2);

  mock('Hello', 'there', 'James');
  expect(mock).toHaveBeenCalledWith('Hello', 'there', 'James');

  mock('James');
  expect(mock).toHaveBeenLastCalledWith('James');
});

test('mock implementation of a cuntion', () => {
  const mock = jest.fn().mockImplementation(() => 'United States');
  expect(mock('Location')).toBe('United States');
  expect(mock).toHaveBeenCalledWith('Location');
});

test('spying using original implementation', () => {
  const pizza = {
    name: n => `Pizza name: ${n}`,
  }
  const spy = jest.spyOn(pizza, 'name');
  expect(pizza.name('Cheese')).toBe('Pizza name: Cheese');
  expect(spy).toHaveBeenCalledWith('Cheese');
});

test('spying using mockImplementation', () => {
  const pizza = {
    name: n => `Pizza name: ${n}`,
  }
  const spy = jest.spyOn(pizza, 'name');
  spy.mockImplementation(n => 'Crazy pizza!');
  expect(pizza.name('Cheese')).toBe('Crazy pizza!');
});