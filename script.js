const champ1 = document.getElementById('champ1');
const champ2 = document.getElementById('champ2');
const champ3 = document.getElementById('champ3');

let champs=[];

champs.push(champ1);
champs.push(champ2)
champs.push(champ3);

const btn = document.getElementById('btn');

const results= document.getElementById('res-container');

champ1.addEventListener('change', function(event) {
    for (champ of champs) {
    let value = event.target.value;
    }
})

