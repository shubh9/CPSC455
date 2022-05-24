let rL = document.querySelector('#receipeList pre')
const storedRecipes = localStorage.getItem('Receipes')
let card = document.querySelector('#card__content');
let txt = '{\
      "title": "Perfect Hard Boiled Eggs",\
      "ingredients": "6 to 12 large eggs, straight from the fridge",\
      "instructions": "1. Add the eggs to a saucepan and cover with water:\n\n2.Bring to a rolling boil\n\n3.Turn off the heat, cover, and let sit:\n\n4.Strain and run under cold water:\n\n5.Peel or store for later:"\
    }'
let receipes = [];
if (storedRecipes) {
    receipes = JSON.parse(storedRecipes)
}

// if this exists then we are on the home page
// rL.textContent = '\n' + JSON.stringify(receipes,'\t', 2)

// render All Cards
var maindiv = document.createElement("div")
maindiv.classList += 'card_container'; // give it a class by adding to the list

for (let i = 0; i < receipes.length; i++) {
    receipe = receipes[i]
    var div = document.createElement("div");
    div.classList += 'card'; // give it a class by adding to the list
    var t_atr = document.createAttribute("id");
    var ing_atr = document.createAttribute("id");
    var int_atr = document.createAttribute("id");


    var title = document.createElement("h1"); //create the paragraph tag
    t_atr.value="title";
    title.setAttributeNode(t_atr);
    title.textContent = receipe.title; // add html text or make another element if needed.


    var ingredients = document.createElement("p");
    ing_atr.value="ingredients";
    ingredients.setAttributeNode(ing_atr);
    ingredients.textContent = receipe.ingredients; // add html text or make another element if needed.


    var instructions = document.createElement("p");
    int_atr.value="instructions";
    instructions.setAttributeNode(int_atr);
    instructions.textContent = receipe.instructions; // add html text or make another element if needed.

    let btn = document.createElement("button");
    btn.classList += 'delete_card'
    btn.innerHTML = "Delete Me";

    div.appendChild(title); 
    div.appendChild(ingredients); 
    div.appendChild(instructions); 
    div.appendChild(btn)
    maindiv.appendChild(div);
}
document.body.appendChild(maindiv);



const deleteAll = (ev)=>{
    localStorage.removeItem('Receipes')
    if (rL) {
        rL.textContent = ''
    }
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
    card.remove();
    });
}

const deleteall = document.getElementById('clearallbtn');
if (deleteall) {
    deleteall.addEventListener('click', deleteAll);
}

const del = document.querySelectorAll('.delete_card');
if (del) {
    for (let i = 0; i < del.length; i++) {
        del[i].addEventListener('click', ()=>{
            del[i].parentElement.style.display = "none";
            for (let j = 0; j < receipes.length; j++) {
                if(receipes[j].title === del[i].parentElement.firstChild.textContent){
                    receipes.splice(j,1);
                    localStorage.setItem('Receipes', JSON.stringify(receipes) );
                }
            }
        });
    }
}