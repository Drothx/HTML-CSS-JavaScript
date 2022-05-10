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




function exercice5 ( tab ) {
  let tmp = 0;
  for (let i = 0; i < tab.length; i++) {
    if (typeof tab[i] === 'number') {
      tmp = tmp + tab[i];
    }
  }
  return tmp;
}



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

