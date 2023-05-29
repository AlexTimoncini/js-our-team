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

let team = [
    {
        Name: 'Wayne Barnett',
        Position: 'Founder & CEO',
        imageProfile: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        Name: 'Angela Caroll',
        Position: 'Chief Editor',
        imageProfile: 'angela-caroll-chief-editor.jpg'
    },
    {
        Name: 'Walter Gordon',
        Position: 'Office Manager',
        imageProfile: 'walter-gordon-office-manager.jpg'
    },
    {
        Name: 'Angela Lopez',
        Position: 'Social Media Manager',
        imageProfile: 'angela-lopez-social-media-manager.jpg'
    },
    {
        Name: 'Scott Estrada',
        Position: 'Developer',
        imageProfile: 'scott-estrada-developer.jpg'
    },
    {
        Name: 'Barbara Ramos',
        Position: 'Graphic Designer',
        imageProfile: 'barbara-ramos-graphic-designer.jpg'
    }
]

for (let i = 0; i < team.length; i++){   
    for (const key in team[i]){
    console.log(key, ': ', team[i][key])
    }   
}
