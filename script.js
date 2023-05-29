// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede

const team = [
    {
        name: 'Wayne Barnett',
        position: 'Founder & CEO',
        imageProfile: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        position: 'Chief Editor',
        imageProfile: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        position: 'Office Manager',
        imageProfile: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        position: 'Social Media Manager',
        imageProfile: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        position: 'Developer',
        imageProfile: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        position: 'Graphic Designer',
        imageProfile: 'barbara-ramos-graphic-designer.jpg'
    }
]

const mainDom = document.querySelector('main');


for (let i = 0; i < team.length; i++){  
    mainDom.appendChild(cardGenerator());
    for (const key in team[i]){
        document.querySelectorAll('.name')[i].innerHTML = team[i].name;
        document.querySelectorAll('.job')[i].innerHTML = team[i].position;
        document.querySelectorAll('img')[i].src = 'img/' + team[i].imageProfile;
    }   
};

function cardGenerator(){
    let card = document.createElement('div');
    card.classList.add('card');

    let imageBox = document.createElement('div');
    imageBox.classList.add('img_box');

    let infoBox = document.createElement('div');
    infoBox.classList.add('personal_info');

    let nameDom = document.createElement('p');
    nameDom.classList.add('name');

    let jobDom = document.createElement('p');
    jobDom.classList.add('job');

    let imageProfile = document.createElement('img');
    imageProfile.classList.add('image_profile');

    imageBox.appendChild(imageProfile);

    infoBox.appendChild(nameDom);
    infoBox.appendChild(jobDom);

    card.appendChild(imageBox);
    card.appendChild(infoBox);

    return card
}
