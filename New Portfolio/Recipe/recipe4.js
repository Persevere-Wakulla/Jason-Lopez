const nameOfRecipe = 'Burito Omelette Recipe';
console.log('nameOfRecipe , nameOfRecipe')

const totalTime = 'Approximately 30 minutes';
const preperation = 'Preperation 10 minutes';
const cookingTime = 'Cook time 20 minutes';
const ziplocBag = 'One thick ziploc bag for cooking';
const addIngredients = 'Add ingredients inside the ziploc and make sure its completely sealed.';
const boilWater = 'Bring water to boil water in a 16 inch pot.';
const addZiplocBagInPot = 'Once the water starts to boil, place the ziploc bag inside pot and place a lid over it.';
const cookFor = 'Cook for approximately 20 minutes or until you can see eggs fully cooked.';
const enjoyFood = 'Enjoy food with flour tortillas or with cuban bread with your choice of condiments.';
console.log('prepTime , preperation , cookingTime , ziplocBag , addIngredients , boilWater , addZiplocBagInPot , cookFor , enjoy')


document.getElementById('title').textContent = nameOfRecipe;
document.getElementById('totaltime').textContent = totalTime;
document.getElementById('preptime').textContent = preperation;
document.getElementById('cookingtime').textContent = cookingTime;
document.getElementById('ziplocbag').textContent = ziplocBag;
document.getElementById('addingredients').textContent = addIngredients;
document.getElementById('boil').textContent = boilWater;
document.getElementById('add').textContent = addZiplocBagInPot;
document.getElementById('cook').textContent = cookFor;
document.getElementById('enjoy').textContent = enjoyFood;
document.getElementById('pic').setAttribute('src','./Omelette.png');

