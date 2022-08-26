//Je selectionne et je stocke
//bouton .btn-success;
const btnSuccess = document.querySelector('.btn-success');
console.log(btnSuccess);
//DIV cookies
const cookies = document.querySelector('.cookies');
console.log(cookies);

btnSuccess.addEventListener('click', function(){
    console.log('bouton cliqué !');
    //Je créer le localStorage avec la valeur "oui"
    localStorage.setItem('banniere', 'oui');
    //Je stocke la valeur du localStorage
    let valeurCle = localStorage.getItem('banniere');
    console.log(valeurCle, "valeur de la clé");
    cookies.style.opacity = "0";
    //Je déclare la fonction
    function check(){
        console.log('déclenchée');
        //Ici bloc à exécuter
        if(valeurCle){
            console.log("stockage existe");
            cookies.remove();
        }else{
            console.log("storage n'existe pas");
        };
    };

    //J'appelle la fonction
    check();
});