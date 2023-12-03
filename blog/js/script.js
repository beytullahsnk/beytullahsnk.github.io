///////// MENU /////////
//animation ouverture du menu
document.querySelector('.icon-ferme').addEventListener('click', function() {
  this.style.display = 'none';
  document.querySelector('.icon-ouvert').style.display = 'block';
  document.querySelector('.navbar-ul').style.display = 'flex';
  document.querySelector('.navbar-fond').style.display = 'block';
});

//animation fermeture du menu
document.querySelector('.icon-ouvert').addEventListener('click', function() {
  this.style.display = 'none';
  document.querySelector('.icon-ferme').style.display = 'block';
  document.querySelector('.navbar-ul').style.display = 'none';
  document.querySelector('.navbar-fond').style.display = 'none';
});

// animation fermeture du menu lors du defilement
window.addEventListener('scroll', function() {
  const iconOuvert = document.querySelector('.icon-ouvert');
  const iconFerme = document.querySelector('.icon-ferme');
  const navbarUl = document.querySelector('.navbar-ul');
  const navbarFond = document.querySelector('.navbar-fond');

  if (window.innerWidth <= 945) {
    // Si l'utilisateur a défilé de plus de 20px et que l'icône ouvert est affichée...
    if (window.scrollY > 40 && iconOuvert.style.display !== 'none') {
      // Cachez l'icône ouvert et affichez l'icône ferme
      iconOuvert.style.display = 'none';
      iconFerme.style.display = 'block';
      // Cachez la liste de navigation et le fond
      navbarUl.style.display = 'none';
      navbarFond.style.display = 'none';
    }
  }
});
// animation fermeture du menu lors d'un clique hors menu
document.querySelector('.navbar-fond').addEventListener('click', function() {
  document.querySelector('.icon-ouvert').style.display = 'none';
  document.querySelector('.icon-ferme').style.display = 'block';
  document.querySelector('.navbar-ul').style.display = 'none';
  this.style.display = 'none';
});

// empeche bug lors de de passage en responsive
window.addEventListener('resize', function(){
  if (window.innerWidth > 945) {
    document.querySelector('.navbar-ul').style.display = 'flex'; // Remettre l'affichage normal
    document.querySelector('.icon-ouvert').style.display = 'none';
    document.querySelector('.icon-ferme').style.display = 'block';
    document.querySelector('.navbar-fond').style.display = 'none';
  } else {
    document.querySelector('.navbar-ul').style.display = 'none'; // Cacher le menu en mode mobile
  }
});

///// NAVBAR //////
//animation navbar
var lastScrollTop = 0;
var delta = 20;
var navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function(event){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   
   if(Math.abs(lastScrollTop - st) <= delta)
      return;
   
   if (st > lastScrollTop && st > delta){
      navbar.classList.add("hide");
   } else {
      navbar.classList.remove("hide");
   }
   
   lastScrollTop = st;
});

/*---LOADER---*/
const loader = document.querySelector('.loader');
window.addEventListener("load", function() { 
  loader.style.display = "none";
})