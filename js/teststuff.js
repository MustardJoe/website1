let person = {};
const testStuff = document.getElementById('teststuff');

person['firstname'] = 'Mario';
person['lastname'] = 'Marios';

person.diffKey = 'here i am';

testStuff.innerHTML = person.firstname + " " + person.lastname;
testStuff.innerHTML += Object.keys(person);