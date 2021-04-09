let pizza = 'pizza is alright';
// console.log(pizza.replace('alright', 'wonderful')); // < first response

// proper answer is to permanently mutate the variable:
pizza = pizza.replace('alright', 'wonderful');
console.log(pizza);
