// JS - query selectors

// změna CSS třídy: box - box.active toggle
const btnToggleClass = document.querySelector('#btnToggleClass');
const boxes = document.querySelectorAll('.box');

btnToggleClass.onclick = function() {
  boxes.forEach(box => {
    box.classList.toggle('box-active');
  });
}

// změna CSS proměnné - getComputedStyle().getPropertyValue /  style.setProperty
const elCssVar = document.querySelector('#greenTitle');
const currentVar = getComputedStyle(elCssVar).getPropertyValue("--color-title");
console.log(`současná barva: ${currentVar}`);
elCssVar.style.setProperty("--color-title", "green");

// změna proměnné na root elementu - document.documentElement


// zatržení všech checkboxů .checked
const btnCheckAll = document.querySelector('#btnCheckAll');
const checks = document.querySelectorAll('.table-check');

btnCheckAll.onclick = function() {
  checks.forEach(check => {
    check.checked = !check.checked;
  });
}


// async / await
async function getUserAsync(name) 
{
  let response = await fetch(`https://api.github.com/users/${name}`);
  let data = await response.json()
  return data;
}

 getUserAsync('svobodalukas')
   .then(data => console.table(data));

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch