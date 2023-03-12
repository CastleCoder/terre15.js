// Créez un programme qui détermine si une liste d’entiers est triée ou pas.


// Exemples d’utilisation :
// $> ruby exo.rb 9 8 3
// Pas triée !

// $> ruby exo.rb 3 8 9 12
// Triée !

// $> ruby exo.rb “Salut”
// erreur.


const args = process.argv.slice(2);

function tri(...args) {

  let arrayTri = args;
  let array2 = arrayTri.slice();
  // console.log(arrayTri);
  // console.log(args.length);

  let arrayInOrder = array2.sort((a, b) => a - b);
  // console.log(arrayInOrder);
  
  let isSorted = true;
  for(let i=0; i<arrayTri.length; i++){
    // console.log(arrayTri);
    // console.log(arrayInOrder);

      if(arrayTri[i] !== arrayInOrder[i]){
        console.log("La liste n'est pas encore triée.");
        isSorted=false;
        break;
      } 
  }
  if (isSorted) {
    console.log("La liste est déjà triée.");
  }
}

tri(...args)