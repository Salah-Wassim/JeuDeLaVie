const canva = document.getElementById("cv");
const pen = canva.getContext("2d");
const space = 50;
const lCanva = Math.round(cv.width);
const hCanva = Math.round(cv.height);

const checkerboardPattern = () => {
    //lignes
    for(let i = space; i< hCanva; i+=space){
        pen.moveTo(0, i);
        pen.lineTo(lCanva, i);
    }
    //colonnes
    for(let j = space; j< lCanva; j+=space){
        pen.moveTo(j, 0);
        pen.lineTo(j, hCanva);
    }
    pen.stroke();
}
checkerboardPattern()

const uknownPictureStart = () => {
    return [
        pen.fillRect(100, 100, space, space),
        pen.fillRect(150, 100, space, space),
        pen.fillRect(200, 50, space, space),
        pen.fillRect(200, 150, space, space),
        pen.fillRect(250, 100, space, space),
        pen.fillRect(300, 100, space, space),
        pen.fillRect(350, 100, space, space),
        pen.fillRect(400, 100, space, space),
        pen.fillRect(450, 150, space, space),
        pen.fillRect(450, 50, space, space),
        pen.fillRect(500, 100, space, space),
        pen.fillRect(550, 100, space, space),
    ]
}
uknownPictureStart()

const nbCol = hCanva / space;
const nbLign = lCanva / space;
const field = new Array();

const nextStepStatusfield = () => {
    let nextStepField = new Array();
    for (let i=0; i<nbCol; i++){
        nextStepField[i] = new Array()
        for (let j=0; j<nbLign; j++){
            nextStepField[i][j] = 0; //nouvelle grille
            initialField = field[i][j]; // grille initial
            // conditions règles
            if((initialField == 0) && ("nombre de voisine" == 3)){
                nextStepField[i][j] = 1
            }
            if((initialField == 1) && ("nombre de voisine" <= 1 || "nombre de voisine" >= 4)){
                nextStepField[i][j]
            }
        }
    }
}

const nbNeigbours = () => {
    // Pour chaque cellule
    // déplacemement possible seulement sur l'intervale [-1; 1]
    // ou 0 correspond à la position de la cellule sur lequel on se trouve
    // recuperer l'abscisse de la cellule sur lequelle on se trouve
    // faire deux boucles for imbriqués (nbCol et nbLign) 
    // allant de -1 à 2 sur l'intervalle [-1; 2[
    for(let i = -1; i<2; i++){
        for(let j = -1; i < 2; j++){
            // réfléchir à la suite
        }
    }
}

const fillfield = () => {
    // Rechercher un moyen de cibler une cellule
    pen.fillRect(x, y, space, space);
}