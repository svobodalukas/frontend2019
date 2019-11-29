// JS - query selectors

// změna CSS třídy: box - box.active toggle


// změna CSS proměnné - getComputedStyle().getPropertyValue /  style.setProperty


// změna proměnné na root elementu - document.documentElement


// zatržení všech checkboxů .checked


// async / await
async function getUserAsync(name) 
{
  let response = await fetch(`https://api.github.com/users/${name}`);
  let data = await response.json()
  return data;
}

// getUserAsync('svobodalukas')
//   .then(data => console.log(data));

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch