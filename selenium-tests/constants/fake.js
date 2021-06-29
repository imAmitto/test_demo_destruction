const faker = require('faker');
fake = {};
function firstName() {
  return faker.name.firstName();
}
function lastName() {
  return faker.name.lastName();
}
function companyName() {
  return faker.company.companyName();
}
function email() {
  return faker.internet.email();
}
function streetAddress() {
  return faker.address.streetAddress();
}
function streetName() {
  return faker.address.streetName();
}
function city() {
  return faker.address.city();
}
function zipCode() {
  return faker.address.zipCode();
}
function country() {
  return faker.address.country();
}
function sentence() {
  return faker.lorem.sentence();
}
function number() {
  return faker.random.number({ min: 3, max: 9 });
}
function projectName() {
  return faker.commerce.productName();
}
function department() {
  return faker.commerce.department();
}
function word() {
  return faker.lorem.word();
}
Object.defineProperty(fake, 'firstName', { get: firstName });
Object.defineProperty(fake, 'lastName', { get: lastName });
Object.defineProperty(fake, 'companyName', { get: companyName });
Object.defineProperty(fake, 'email', { get: email });
Object.defineProperty(fake, 'streetAddress', { get: streetAddress });
Object.defineProperty(fake, 'streetName', { get: streetName });
Object.defineProperty(fake, 'city', { get: city });
Object.defineProperty(fake, 'zipCode', { get: zipCode });
Object.defineProperty(fake, 'country', { get: country });
Object.defineProperty(fake, 'sentence', { get: sentence });
Object.defineProperty(fake, 'number', { get: number });
Object.defineProperty(fake, 'projectName', { get: projectName });
Object.defineProperty(fake, 'department', { get: department });
Object.defineProperty(fake, 'word', { get: word });
module.exports = fake;
