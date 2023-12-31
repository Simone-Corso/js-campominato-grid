//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
//ed emetto un messaggio in console con il numero della cella cliccata.

//Inizio con l'inserire una variabile dove poi mettere gli elementi che voglio mettere dentro

    const mainSectionEl = document.querySelector('main section.main-contenuto');
    console.log(mainSectionEl);
//creo un altro elemento per button

    const inizioButtonEl = document.querySelector ('button#inizio-gioco'); 
    console.log(inizioButtonEl);  
    
//creo una variabile per variare la difficoltà del gioco

    const difficultyEl = document.querySelector('select#select-difficulty');
    console.log(difficultyEl);

//adesso creo un evento di click con una funzione
    inizioButtonEl-addEventListener('click', function(){
        generateNewGame(mainSectionEl,difficultyEl);
        console.log(inizioButtonEl);
    });

//function per generare il nuovo gioco
    function generateNewGame(wrapperElement, LevelSelector){
        wrapperElement.innerHTML = '';

        const level = parseInt(LevelSelector.value);

        let cellsNo;

        switch (level){
            case 0:

            default: cellsNo = 100;
            break;

            case 1:

             cellsNo = 81;
            break;

            case 2:

            cellsNo = 49;
            break;
        
        }

        let cellsPerRow = Math.sqrt(cellsNo);
}