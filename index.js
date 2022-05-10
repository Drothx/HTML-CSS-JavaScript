const moduleHttp = require('http');

const port = 8070;
const host = '127.0.0.1';

//console.log('Module http : ', moduleHttp);

const monServeur = moduleHttp.createServer();

/*monServeur.listen(port, host, function() */
function serveurLance()
    {   
        console.log(`Serveur démarré à l'adresse http://${host}:${port}`);
    };

//écoute d'évènement
monServeur.on('request', function(request, response)
    {
        console.log('request.url: ', request.url);
        const message = `<h1> Titre 1</h1>\n </br><hr></br><p> Heureux de vous revoir !</p>`;
        response.writeHead
        (
            200,
            "C'est OK",
            {
                'Content-Type': 'text/html; charset=utf8',
                'Content-Lenght': Buffer.byteLength(message),
            }
        );
    //Puis on écrit la reponse
    response.write(message, function()
    {
        response.end();
    })
});  //quand il va recevoir une request, il va lancer un callback

monServeur.listen(port, host, serveurLance);

// Nous allons écrire une boucle qui va faire plusieurs console.log...

/*for (let compteur = 1; compteur <= 100; compteur++) //++ peut aussi s'ecrire "+= 1"
    {
        //Le 1er param de la boucle for est le compteur
        //Le 2eme oaral est la condition de sortie de boucle
        //Le 3eme param est l'incrementation du compteur qui va s'effectuer a chaque tour de boucle
        console.log(`Bonjour ${compteur} fois !`); //Alt Gr + 7 pour faire des back quotes
        
    };*/