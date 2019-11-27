// JS

// změna CSS třídy: box - box.active toggle

// změna CSS proměnné - getPropertyValue /  style.setProperty

// zatržení všech checkboxů

// async / await
 
async function getUserAsync(name) 
{
  let response = await fetch(`https://api.github.com/users/${name}`);
  let data = await response.json()
  return data;
}

getUserAsync('svobodalukas')
  .then(data => console.log(data));