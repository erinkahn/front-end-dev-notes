// 3 promise functions and 1 async/await function to return the promises

// 1: returns bean type
const shopForBeans = () => {
  return new Promise((resolve, reject) => {
	const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
  setTimeout(()=>{
    let randomIndex = Math.floor(Math.random() * 5);
    let beanType = beanTypes[randomIndex];
    console.log(`I bought ${beanType} beans because they were on sale.`);
   resolve(beanType);
  }, 1000)
})
}

// 2. returns boolean if beans are soft or not
let soakTheBeans = (beanType) => {
   return new Promise((resolve, reject) => {
     console.log('Time to soak the beans.');
    setTimeout(()=>{
      console.log(`... The ${beanType} beans are softened.`);
      resolve(true);
      }, 1000);
  });
}

// 3. returns if it's time to cook the beans or not and if theyre soft then dinner is served
let cookTheBeans = (isSoftened) => {
  return new Promise((resolve, reject) => {
    console.log('Time to cook the beans.');
    setTimeout(()=>{
      if (isSoftened) {
        console.log('... The beans are cooked!');
        resolve('\n\nDinner is served!');
      }
    }, 1000);
  });
}

// 4. async / await function
const makeBeans = async () => {
	try {
		let type = await shopForBeans();
		let isSoft = await soakTheBeans(type);
		let dinner = await cookTheBeans(isSoft);
		console.log(dinner)
	} catch(err) {
		console.log(err)
	}
}

// 5. call it
makeBeans();

// returns:
  // I bought kidney beans because they were on sale.
  // Time to soak the beans.
  // ... The kidney beans are softened.
  // Time to cook the beans.
  // ... The beans are cooked!

  // Dinner is served
  
