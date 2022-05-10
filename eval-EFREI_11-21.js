/**
 * Partie 1 : HTML & CSS (9PTS)
 * 
 * Reproduisez la page web fournie en pièce jointe (fichier .png) en utilisant vos connaissances des langages HTML et CSS. (9pts)
 * 
 * ----------------------------------------------------------------------------
 * ----------------------------------------------------------------------------
 * 
 * Partie 2 : JavaScript (11PTS)
 * 
 * 1) Ecrivez un algorithme permettant d'afficher ne console les éléments du formulaire de votre page HTML au moment où l'utilisateur CLIQUE sur le bouton de soumission du formulaire. (2pts)
 * 
 * ----------------------------------------------------------------------------
 * 
 * 2) Avec du code JavaScript, ajoutez un événement sur le titre de la div contenant le paragraphe de gauche, de sorte que lorsque l'utilisateur passe la souris sur le titre, la police de celui-ci grossit de 10px, devient rouge et le fond devient jaune (événement 'hover'). (2pts)
 * 
 * ----------------------------------------------------------------------------
 * 
 * 3) Considérez l'objet suivant :
 * 
  const killingRobot = {
    ref: 'KR-MACH001',
    codeName: 'Pedro',
    energySource: 'electricity',
    battery: {
      mAhCapacity: 75000,
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
          return true;
        } else {
          return false;
        }
      },
      canFly: true,
      canSwim: false,
    },
  };
 * 
 * a- Ecrivez le code permettant au robot d'atteindre l'ultra-instinct, puis invoquez la méthode "hasAchievedUltraInstinct" pour vérifier votre code. (0.5pt)
 * 
 * b- Ajoutez à l'objet une méthode appelée "willNowProceedToDestroyingMankind" qui déclenche une alerte disant "Adieu, monde cruel !" si le robot a atteint l'ultra-instinct. Invoquez la méthode pour vérifier votre code... (0.5pt)
 * 
 * ----------------------------------------------------------------------------
 * 
 * 4) Ecrivez une fonction qui prend deux arguments. Cette fonction devra :
 *      Vérifier si les deux arguments sont de type "number".
 *          Si oui : elle retourne l'addition des deux arguments multipliés par 3
 *          Si non : elle vérifie si les deux arguments sont de type "string"
 *              Si oui : elle retourne la concaténation des deux arguments dans une chaîne de caractères
 *              Si non : elle retourne un objet ayant deux propriétés dont la clé est ce que vous voulez et la valeur est chacun des arguments. (2pts)
 * 
 * ----------------------------------------------------------------------------
 * 
 * 5) Ecrivez une fonction qui prend en argument le tableau suivant : 
 * const meliMelo = [undefined, 4, 8, "couscous", 15, false, 16, 23, "raclette", true, {}, 42, []];
 * 
 * et renvoie la somme de tous les éléments UNIQUEMENT si ce sont des nombres ou des chiffres ! (vous utiliserez une boucle de votre choix). (2pts)
 * 
 * ----------------------------------------------------------------------------
 * 
 * 6) Ecrivez le code JavaScript permettant de créer la page HTML suivante : (2pts)
 * 
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