let pre = document.querySelector('#msg pre');
let rL = document.querySelector('#receipeList pre')
const storedRecipes = localStorage.getItem('Receipes')
let card = document.querySelector('#card__content');

let receipes = []
if (storedRecipes) {
    receipes = JSON.parse(storedRecipes)
}
if (pre) {
    pre.textContent = '\n' + JSON.stringify(receipes,'\t', 2)
}

const addReceipe = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let receipe = {
        // id: Date.now(),
        title: document.getElementById('title').value,
        ingredients: document.getElementById('ingredients').value,
        instructions: document.getElementById('instructions').value
    }
    receipes.push(receipe);
    // to clear the form for the next entries
    document.querySelector('form').reset();

    //for display purposes only
    console.warn('added' , {receipes} );
    //pre.textContent = '\n' + JSON.stringify(receipes, '\t', 2);

    //saving to localStorage
    localStorage.setItem('Receipes', JSON.stringify(receipes) );
}

const submit = document.getElementById('submitbtn');
if (submit) {
    submit.addEventListener('click', addReceipe);
}




