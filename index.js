<!--
* ----------------------------------------------------------------------------
* ----------------------------------------------------------------------------
-->


<!-- Partie 2 : JavaScript (11PTS) -->

<!--
<!-- 2) Avec du code JavaScript, ajoutez un événement sur le titre de la div contenant le paragraphe de gauche,  
<!-- de sorte que lorsque l'utilisateur passe la souris sur le titre, la police de celui-ci grossit de 10px, devient rouge et le fond devient jaune (événement 'hover'). (2pts)

<script>
      
    document.getElementById("titre_un").onmouseover = function() {mouseOver()};
    document.getElementById("titre_un").onmouseout = function() {mouseOut()};
    

  function mouseOver() {
    document.getElementById("titre_un").style.color = "red";
    document.getElementById("titre_un").style.backgroundColor="yellow";
    document.getElementById("titre_un").style.fontSize = "34px";
  }

  function mouseOut() {
    document.getElementById("titre_un").style.color = "black";
    document.getElementById("titre_un").style.backgroundColor="";
    document.getElementById("titre_un").style.fontSize = "24px";
  }

    </script>

<!--  3) Considérez l'objet suivant :

 const killingRobot = {
   ref: 'KR-MACH001',
   codeName: 'Pedro',
   energySource: 'electricity',
   battery: {
     mAhCapacity: 1000000,
     material: 'adamantium',
     technology: 'high-power lithium-ion'
   },
   dimensions: {
     heightInCm: 450,
     widthInCm: 190,
     weightInKg: 3600
   },
   weaponry: [
     'laser beam machine guns',
     'nuclear rocket launchers',
     'adamantium sword',
     'adamantium spear',
     'H-Bomb',
     'electromagnetic impulse canon',
     'sulfuric acid high-pressure canon'
   ],
   tools: [
     'emergency self-repair nanotechnology',
     'advanced machine learning capabilities',
     'high capacity solar panels',
     'adamantium shell coating',
     'adamantium wings',
     'adamantium solar powered engines'
   ],
   abilities: {
     canWipeOutMankindFromTheFaceOfTheEarth: true,
     lovesAnimals: true,
     hasAchievedUltraInstinct: function() {
       if (this.battery.mAhCapacity >= 1000000) {
        alert("Adieu monde cruel"); 
        return true;
       } else {
         return false;
       }
     },
     canFly: true,
     canSwim: false,
   },
 };



<!-- 4) Ecrivez une fonction qui prend deux arguments. Cette fonction devra :
<!-- *      Vérifier si les deux arguments sont de type "number".
<!--*          Si oui : elle retourne l'addition des deux arguments multipliés par 3
<!--*          Si non : elle vérifie si les deux arguments sont de type "string"
<!--*              Si oui : elle retourne la concaténation des deux arguments dans une chaîne de caractères
<!-- *              Si non : elle retourne un objet ayant deux propriétés dont la clé est ce que vous voulez et la valeur est chacun des arguments. (2pts) 

 function exercice4( arg1, arg2 ) {

    if (typeof arg1 === 'number' && typeof arg2 === 'number') {
    
    tmp = arg1 + arg2;
    
    return tmp * 3;
    
    }
    
    else if (typeof arg1 === 'string' && typeof arg2 === 'string') {
    
    tmp = arg1 + arg2;
    
    return tmp;
    
    }
    
    else {
    
    return {
    
    'nombres': 'Il absolument faut 2 nombres !',
    
    'string': 'Il faut absolument 2 chaînes de caractère !'
    
    }
    
    }
    
    }



  <!--  5) Ecrivez une fonction qui prend en argument le tableau suivant : 
 <!--* const meliMelo = [undefined, 4, 8, "couscous", 15, false, 16, 23, "raclette", true, {}, 42, []];
 <!--* 
 <!--* et renvoie la somme de tous les éléments UNIQUEMENT si ce sont des nombres ou des chiffres ! (vous utiliserez une boucle de votre choix). (2pts)
 <!--* 
<!-- * ----------------------------------------------------------------------------

function exercice5 ( tab ) {
  let tmp = 0;
  for (let i = 0; i < tab.length; i++) {
    if (typeof tab[i] === 'number') {
      tmp = tmp + tab[i];
    }
  }
  return tmp;
}


<!-- * 
<!-- * 6) Ecrivez le code JavaScript permettant de créer la page HTML suivante : (2pts)
<!-- * 

  <body>
    <div class="main-container">

      <section id="articles-section">
        <p class="article"></p>
        <p class="article"></p>
        <p class="article"></p>
      </section>
    
      <section id="images-section">
        <img src="" alt="Une image aléatoire" />
        <button type="button" onclick="pickImgSrc()">Change Image !</button>
      </section>

    </div>
  </body>
 *
 * **/


document.getElementById('p1').innerHTML = 
<body>
    <div class="main-container">

      <section id="articles-section">
        <p class="article"></p>
        <p class="article"></p>
        <p class="article"></p>
      </section>
    
      <section id="images-section">
        <img src="" alt="Une image aléatoire" />
        <button type="button" onclick="pickImgSrc()">Change Image !</button>
      </section>

    </div>
  </body>];
-->
