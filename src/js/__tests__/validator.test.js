import Validator from "../validator.js";


test.each([
  ['the name begins and ends with a number.', '1Vladimir1', false],
  ['the name begins and ends with a dash.', '-Vladimir-', false],
  ['the name begins and ends with a underscore.', '_Vladimir_', false],
  ['the name starts with a number and ends with an underscore.', '1Vladimir_', false],
  ['the name starts with a number and ends with an dash.', '1Vladimir-', false],
  ['the name has 3 digits in a row.', 'Vl888adimir', false],
  ['there is a space in the name.', 'Vladi mir', false],
  ['there is a period in the name.', 'Vlad.imir', false],
  ['the name is correct.', 'Vladimir1', true],
])('Validate name: %s', (test, name, expected) => {
  const validator = new Validator();
  expect(validator.validateUsername(name)).toBe(expected);
});
