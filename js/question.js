

// Array of Questions
const quiz = [
    {
        q:' From the available types, what is <span class="type fire">Fire</span> super effective against?',
        options:['<img src="css/assets/icons/Grass.png" alt="grass"> <img src="css/assets/icons/Ice.png" alt="ice"> <img src="css/assets/icons/Bug.png" alt="bug">',
                 '<img src="css/assets/icons/Grass.png" alt="grass"> <img src="css/assets/icons/Water.png" alt="water"><img src="css/assets/icons/Bug.png" alt="bug">', 
                 '<img src="css/assets/icons/Ice.png" alt="ice"> <img src="css/assets/icons/Bug.png" alt="bug"> <img src="css/assets/icons/Steel.png" alt="steel">', 
                 '<img src="css/assets/icons/Grass.png" alt="grass"> <img src="css/assets/icons/Ice.png" alt="ice"> <img src="css/assets/icons/Steel.png" alt="steel">'],
        answer:0
    },
    {
        q:' From the available types, what is <span class="type water">Water</span> super effective against?',
        options:['<img src="css/assets/icons/Ground.png" alt="ground"> <img src="css/assets/icons/Fire.png" alt="fire"> <img src="css/assets/icons/Rock.png" alt="rock">',
                 '<img src="css/assets/icons/Ground.png" alt="ground"> <img src="css/assets/icons/Fire.png" alt="fire"><img src="css/assets/icons/Grass.png" alt="grass">', 
                 '<img src="css/assets/icons/Rock.png" alt="rock"> <img src="css/assets/icons/Ground.png" alt="ground"> <img src="css/assets/icons/Electric.png" alt="electric">', 
                 '<img src="css/assets/icons/Water.png" alt="water"> <img src="css/assets/icons/Rock.png" alt="ground"> <img src="css/assets/icons/Electric.png" alt="electric">'],
        answer:0
    },
    {
        q:'From the available types, what is <span class="type grass">Grass</span> super effective against?',
        options:['<img src="css/assets/icons/Water.png" alt="water"> <img src="css/assets/icons/Ground.png" alt="ground"> <img src="css/assets/icons/Rock.png" alt="rock">',
                 '<img src="css/assets/icons/Ground.png" alt="ground"> <img src="css/assets/icons/Water.png" alt="fire"><img src="css/assets/icons/Dark.png" alt="dark">', 
                 '<img src="css/assets/icons/Dark.png" alt="dark"> <img src="css/assets/icons/Ground.png" alt="ground"> <img src="css/assets/icons/Rock.png" alt="rock">', 
                 '<img src="css/assets/icons/Rock.png" alt="rock"> <img src="css/assets/icons/Water.png" alt="ground"> <img src="css/assets/icons/Electric.png" alt="electric">'],
        answer:0
    },
    {
        q:'From the available types, what is <span class="type electric">Electric</span> super effective against?',
        options:['<img src="css/assets/icons/Water.png" alt="water"> <img src="css/assets/icons/Flying.png" alt="flying">',
                 '<img src="css/assets/icons/Grass.png" alt="grass"> <img src="css/assets/icons/Water.png" alt="water">', 
                 '<img src="css/assets/icons/Flying.png" alt="flying"> <img src="css/assets/icons/Ground.png" alt="ground">', 
                 '<img src="css/assets/icons/Ground.png" alt="ground"> <img src="css/assets/icons/Water.png" alt="rock">'],
        answer:0
    },
    {
        q:'From the available types, what is <span class="type ice">Ice</span> super effective against?',
        options:['<img src="css/assets/icons/Grass.png" alt="grass"> <img src="css/assets/icons/Dragon.png" alt="dragon"> <img src="css/assets/icons/Flying.png" alt="flying">',
                 '<img src="css/assets/icons/Grass.png" alt="grass"> <img src="css/assets/icons/Flying.png" alt="flying"> <img src="css/assets/icons/Rock.png" alt="rock">',
                 '<img src="css/assets/icons/Flying.png" alt="flying"> <img src="css/assets/icons/Dragon.png" alt="dragon"> <img src="css/assets/icons/Normal.png" alt="normal">', 
                 '<img src="css/assets/icons/Ground.png" alt="ground"> <img src="css/assets/icons/Rock.png" alt="rock"> <img src="css/assets/icons/Flying.png" alt="flying">'],
        answer:0
    },
    {
        q:'From the available types, what is <span class="type fighting">Fighting</span> super effective against?',
        options:['<img src="css/assets/icons/Normal.png" alt="normal"> <img src="css/assets/icons/Ice.png" alt="ice"> <img src="css/assets/icons/Rock.png" alt="rock">',
                 '<img src="css/assets/icons/Normal.png" alt="normal"> <img src="css/assets/icons/Water.png" alt="water"> <img src="css/assets/icons/Dark.png" alt="dark">',
                 '<img src="css/assets/icons/Dragon.png" alt="dragon"> <img src="css/assets/icons/Water.png" alt="water"> <img src="css/assets/icons/Dark.png" alt="dark">',
                 '<img src="css/assets/icons/Ice.png" alt="ice"> <img src="css/assets/icons/Dragon.png" alt="dragon"> <img src="css/assets/icons/Steel.png" alt="steel">'],
        answer:0
    },
    {
        q:'From the available types, what is <span class="type ghost">Ghost</span> super effective against?',
        options:['<img src="css/assets/icons/Psychic.png" alt="psychic"> <img src="css/assets/icons/Ghost.png" alt="ghost">',
                 '<img src="css/assets/icons/Psychic.png" alt="psychic"> <img src="css/assets/icons/Dark.png" alt="dark">', 
                 '<img src="css/assets/icons/Dark.png" alt="dark"> <img src="css/assets/icons/Fairy.png" alt="fairy">', 
                 '<img src="css/assets/icons/Ghost.png" alt="ghost"> <img src="css/assets/icons/Fairy.png" alt="fairy">'],
        answer:0
    },
    {
        q:'From the available types, what is <span class="type dark">Dark</span> super effective against?',
        options:['<img src="css/assets/icons/Flying.png" alt="flying"> <img src="css/assets/icons/Ghost.png" alt="ghost">',
                 '<img src="css/assets/icons/Psychic.png" alt="psychic"> <img src="css/assets/icons/Flying.png" alt="flying">', 
                 '<img src="css/assets/icons/Ghost.png" alt="ghost"> <img src="css/assets/icons/Dark.png" alt="dark">', 
                 '<img src="css/assets/icons/Psychic.png" alt="psychic"> <img src="css/assets/icons/Ghost.png" alt="ghost">'],
        answer:0
    },
    {
        q:'From the available types, what is <span class="type steel">Steel</span> super effective against?',
        options:['<img src="css/assets/icons/Ice.png" alt="ice"> <img src="css/assets/icons/Rock.png" alt="rock"> <img src="css/assets/icons/Fairy.png" alt="fairy">',
                 '<img src="css/assets/icons/Fire.png" alt="fire"> <img src="css/assets/icons/Rock.png" alt="rock"> <img src="css/assets/icons/Fairy.png" alt="fairy">',
                 '<img src="css/assets/icons/Water.png" alt="water"> <img src="css/assets/icons/Ground.png" alt="ground"> <img src="css/assets/icons/Ice.png" alt="ice">',
                 '<img src="css/assets/icons/Fairy.png" alt="fairy"> <img src="css/assets/icons/Fire.png" alt="fire"> <img src="css/assets/icons/Ice.png" alt="ice">'],
        answer:0
    },
    {
        q:'<span class="type poison">Poison</span> is super effecitve against <span class="type grass">Grass</span> and <span class="type psychic">Psychic</span> type Pokemon ',
        options:['True', 'False'],
        answer:1
    },
    {
        q:'<span class="type dragon">Dragon</span> is only super effecitve against <span class="type dragon">Dragon</span> type Pokemon ',
        options:['True', 'False'],
        answer:0
    },
    {
        q:'Groudon would be good against Tyranitar because <span class="type ground">Ground</span> is super effective against <span class="type rock">Rock</span>',
        options:['True', 'False'],
        answer:0
    },
    {
        q:'<span class="type flying">Flying</span> is super effective against <span class="type electric">Electric</span> type pokemon',
        options:['True', 'False'],
        answer:1
    },
    {
        q:'Azumarill would be good against Altaria because <span class="type fairy">Fairy</span> is super effective against <span class="type dragon">Dragon</span>',
        options:['True', 'False'],
        answer:0
    },
    {
        q:'Cresselia would be good against both Machamp and Nidoking as <span class="type psychic">Psychic</span> is super effective against <span class="type fighting">Fighting</span> and <span class="type poison">Poison</span>',
        options:['True', 'False'],
        answer:0
    },
]

//GOOD

/*




What is good against psychic = Fighting,Poison
What is good against bug = Grass,Psychic,Dark
What is good against rock = Fire,Ice,Flying,Bug
*/

//BAD

/*
What is bad against normal = Rock,Steel
What is bad against fire = Fire,Water,Rock,Dragon
What is bad against water = Water,Grass,Dragon
What is bad against grass = Fire,Grass,Poison,Flying,Bug,Dragon,Steel
What is bad against electricity =Grass,Electricity,Dragon,
What is bad against ice = Fire,Water,Ice,Steel
What is bad against fighting = Poison,Flying,Psychic,Bug,Fairy
What is bad against poison = Poison,Ground,Rock,Ghost
What is bad against ground = Grass,Bug
What is bad against flying = Electricity,Rock,Steel
What is bad against psychic = Psychic,Steel
What is bad against bug = Fire,Fighting,Poison,Flying,Ghost,Steel,Fairy
What is bad against rock = Fighting,Ground,Steel
What is bad against ghost = Dark,Steel
What is bad against dragon = Fighting,Dark,Steel,Fairy
What is bad against steel = Fire,Water,Steel
What is bad against fairy = Fire,Poison,Steel
Replace "bad" with "not very effective"
*/