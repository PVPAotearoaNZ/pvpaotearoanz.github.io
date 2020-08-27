
  
 const questionText=document.querySelector(".question-text");
 const optionBox=document.querySelector(".option-box");
 const currentQuestionNum=document.querySelector(".current-question-num");
 const answerDescription=document.querySelector(".answer-description");
 const nextQuestionBtn=document.querySelector(".next-question-btn");
 const correctAnswers=document.querySelector(".correct-answers");
 const seeResultBtn=document.querySelector(".see-result-btn");
 const remainingTime=document.querySelector(".remaining-time");
 const timeUpText=document.querySelector(".time-up-text");
 const quizHomeBox=document.querySelector(".quiz-home-box");
 const quizBox=document.querySelector(".quiz-box");
 const quizOverBox=document.querySelector(".quiz-over-box");
 const startAgainQuizBtn=document.querySelector(".start-again-quiz-btn");
 const goHomeBtn=document.querySelector(".go-home-btn");
 const categoryBox=document.querySelector(".category-box");
 const categoryText=document.querySelector(".category-text");
 let availableQuestions = [];
 // const startQuizBtn=document.querySelector(".start-quiz-btn");
 let attempt=0;
 let currentQuestion=0;
 let score=0;
 let number=0;
 let myArray=[];
 let interval;
 let categoryIndex;

 // questions and options and  answer and answer description
 // array of objects
 myApp=[
{
    category:"Super Effective",
    quizWrap:[
      {
        question:'From the available types, what is <span class="type grass">Grass</span> super effective against?',
        options:['<img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Water.png" alt="fire"><img src="img/icons/Dark.png" alt="dark">',
                 '<img src="img/icons/Water.png" alt="water"> <img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Rock.png" alt="rock">', 
                 '<img src="img/icons/Dark.png" alt="dark"> <img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Rock.png" alt="rock">', 
                 '<img src="img/icons/Rock.png" alt="rock"> <img src="img/icons/Water.png" alt="ground"> <img src="img/icons/Electric.png" alt="electric">'],
        answer:1,
        description:"Frenzy Plant is super effective against Groudon."
        },
        {
          question:' From the available types, what is <span class="type fire">Fire</span> super effective against?',
          options:['<img src="img/icons/Fairy.png" alt="grass"> <img src="img/icons/Water.png" alt="water"><img src="img/icons/Bug.png" alt="bug">', 
                   '<img src="img/icons/Fairy.png" alt="fairy"> <img src="img/icons/Bug.png" alt="bug"> <img src="img/icons/Steel.png" alt="steel">',
                   '<img src="img/icons/Grass.png" alt="grass"> <img src="img/icons/Ice.png" alt="ice"> <img src="img/icons/Bug.png" alt="bug">', 
                   '<img src="img/icons/Grass.png" alt="grass"> <img src="img/icons/Ice.png" alt="ice"> <img src="img/icons/Normal.png" alt="steel">'],
          answer:2,
      },
      {
          question:' From the available types, what is <span class="type water">Water</span> super effective against?',
          options:['<img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Fire.png" alt="fire"> <img src="img/icons/Rock.png" alt="rock">',
                   '<img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Fire.png" alt="fire"><img src="img/icons/Grass.png" alt="grass">', 
                   '<img src="img/icons/Rock.png" alt="rock"> <img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Electric.png" alt="electric">', 
                   '<img src="img/icons/Water.png" alt="water"> <img src="img/icons/Rock.png" alt="ground"> <img src="img/icons/Electric.png" alt="electric">'],
          answer:0
      },
      {
          question:'From the available types, what is <span class="type grass">Grass</span> super effective against?',
          options:['<img src="img/icons/Water.png" alt="water"> <img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Rock.png" alt="rock">',
                   '<img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Water.png" alt="fire"><img src="img/icons/Dark.png" alt="dark">', 
                   '<img src="img/icons/Dark.png" alt="dark"> <img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Rock.png" alt="rock">', 
                   '<img src="img/icons/Rock.png" alt="rock"> <img src="img/icons/Water.png" alt="ground"> <img src="img/icons/Electric.png" alt="electric">'],
          answer:0
      },
      {
          question:'From the available types, what is <span class="type electric">Electric</span> super effective against?',
          options:['<img src="img/icons/Grass.png" alt="grass"> <img src="img/icons/Water.png" alt="water">', 
                   '<img src="img/icons/Flying.png" alt="flying"> <img src="img/icons/Ground.png" alt="ground">', 
                   '<img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Water.png" alt="rock">',
                   '<img src="img/icons/Water.png" alt="water"> <img src="img/icons/Flying.png" alt="flying">'],
          answer:3
      },
      {
          question:'From the available types, what is <span class="type ice">Ice</span> super effective against?',
          options:['<img src="img/icons/Grass.png" alt="grass"> <img src="img/icons/Dragon.png" alt="dragon"> <img src="img/icons/Flying.png" alt="flying">',
                   '<img src="img/icons/Grass.png" alt="grass"> <img src="img/icons/Flying.png" alt="flying"> <img src="img/icons/Rock.png" alt="rock">',
                   '<img src="img/icons/Flying.png" alt="flying"> <img src="img/icons/Dragon.png" alt="dragon"> <img src="img/icons/Normal.png" alt="normal">', 
                   '<img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Rock.png" alt="rock"> <img src="img/icons/Flying.png" alt="flying">'],
          answer:0
      },
      {
          question:'From the available types, what is <span class="type fighting">Fighting</span> super effective against?',
          options:['<img src="img/icons/Normal.png" alt="normal"> <img src="img/icons/Water.png" alt="water"> <img src="img/icons/Dark.png" alt="dark">',
                   '<img src="img/icons/Dragon.png" alt="dragon"> <img src="img/icons/Water.png" alt="water"> <img src="img/icons/Dark.png" alt="dark">',
                   '<img src="img/icons/Normal.png" alt="normal"> <img src="img/icons/Ice.png" alt="ice"> <img src="img/icons/Rock.png" alt="rock">',
                   '<img src="img/icons/Ice.png" alt="ice"> <img src="img/icons/Dragon.png" alt="dragon"> <img src="img/icons/Steel.png" alt="steel">'],
          answer:2
      },
      {
          question:'From the available types, what is <span class="type ghost">Ghost</span> super effective against?',
          options:['<img src="img/icons/Psychic.png" alt="psychic"> <img src="img/icons/Ghost.png" alt="ghost">',
                   '<img src="img/icons/Psychic.png" alt="psychic"> <img src="img/icons/Dark.png" alt="dark">', 
                   '<img src="img/icons/Dark.png" alt="dark"> <img src="img/icons/Fairy.png" alt="fairy">', 
                   '<img src="img/icons/Ghost.png" alt="ghost"> <img src="img/icons/Fairy.png" alt="fairy">'],
          answer:0
      },
      {
          question:'From the available types, what is <span class="type dark">Dark</span> super effective against?',
          options:['<img src="img/icons/Flying.png" alt="flying"> <img src="img/icons/Ghost.png" alt="ghost">',
                   '<img src="img/icons/Psychic.png" alt="psychic"> <img src="img/icons/Flying.png" alt="flying">', 
                   '<img src="img/icons/Ghost.png" alt="ghost"> <img src="img/icons/Dark.png" alt="dark">', 
                   '<img src="img/icons/Psychic.png" alt="psychic"> <img src="img/icons/Ghost.png" alt="ghost">'],
          answer:3
      },
      {
          question:'From the available types, what is <span class="type steel">Steel</span> super effective against?',
          options:['<img src="img/icons/Fire.png" alt="fire"> <img src="img/icons/Rock.png" alt="rock"> <img src="img/icons/Fairy.png" alt="fairy">',
                   '<img src="img/icons/Ice.png" alt="ice"> <img src="img/icons/Rock.png" alt="rock"> <img src="img/icons/Fairy.png" alt="fairy">',
                   '<img src="img/icons/Water.png" alt="water"> <img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Ice.png" alt="ice">',
                   '<img src="img/icons/Fairy.png" alt="fairy"> <img src="img/icons/Fire.png" alt="fire"> <img src="img/icons/Ice.png" alt="ice">'],
          answer:0
      },
      {
          question:'<span class="type poison">Poison</span> is super effective against <span class="type grass">Grass</span> and <span class="type psychic">Psychic</span> type Pokemon ',
          options:['True', 'False'],
          answer:1
      },
      {
          question:'<span class="type dragon">Dragon</span> is only super effective against <span class="type dragon">Dragon</span> type Pokemon ',
          options:['True', 'False'],
          answer:0,
          description:'I know right!, dragonite does not like looking at itself in the mirror',
      },
      {
          question:'Groudon would be good against Tyranitar because <span class="type ground">Ground</span> is super effective against <span class="type rock">Rock</span>',
          options:['True', 'False'],
          answer:0
      },
      {
          question:'<span class="type flying">Flying</span> is super effective against <span class="type electric">Electric</span> type Pok&eacute;mon',
          options:['True', 'False'],
          answer:1,
          description: 'Flying + Electric = KFC'
      },
      {
          question:'Azumarill would be good against Altaria because <span class="type fairy">Fairy</span> is super effective against <span class="type dragon">Dragon</span>',
          options:['True', 'False'],
          answer:0
      },
      {
          question:'Cresselia would be good against both Machamp and Nidoking as <span class="type psychic">Psychic</span> is super effective against <span class="type fighting">Fighting</span> and <span class="type poison">Poison</span>',
          options:['True', 'False'],
          answer:0
      },
      {
          question:'Golem would be good against Venusaur as <span class="type rock">Rock</span> is super effective against <span class="type grass">Grass</span>',
          options:['True', 'False'],
          answer:1
      },
      {
          question:'From the available types, what is <span class="type bug">Bug</span> super effective against?',
          options:['<img src="img/icons/Psychic.png" alt="psychic"> <img src="img/icons/Normal.png" alt="nomral"> <img src="img/icons/Grass.png" alt="grass">',
                   '<img src="img/icons/Psychic.png" alt="psychic"> <img src="img/icons/Dark.png" alt="dark"> <img src="img/icons/Ice.png" alt="ice">',
                   '<img src="img/icons/Grass.png" alt="grass"> <img src="img/icons/Psychic.png" alt="psychic"> <img src="img/icons/Dark.png" alt="dark">',
                   '<img src="img/icons/Normal.png" alt="normal"> <img src="img/icons/Grass.png" alt="grass"> <img src="img/icons/Ice.png" alt="ice">'],
          answer:2
      },
      {
          question:'From the available types, what is <span class="type psychic">Psychic</span> super effective against?',
          options:['<img src="img/icons/Psychic.png" alt="psychic"> <img src="img/icons/Poison.png" alt="poison">',
                   '<img src="img/icons/Fighting.png" alt="fighting"> <img src="img/icons/Poison.png" alt="poison">', 
                   '<img src="img/icons/Ghost.png" alt="ghost"> <img src="img/icons/Dark.png" alt="dark">', 
                   '<img src="img/icons/Fighting.png" alt="fighting"> <img src="img/icons/Ghost.png" alt="ghost">'],
          answer:1
      }, 
    ]
},

{
    category:"Not Very Effective",
    quizWrap:[ 
        {
         question:'From the available types, what is <span class="type normal">Normal</span> not very effective against?',
         options:['<img src="img/icons/Rock.png" alt="rock"> <img src="img/icons/Ghost.png" alt="ghost"> <img src="img/icons/Steel.png" alt="steel">',
                  '<img src="img/icons/Rock.png" alt="rock"> <img src="img/icons/Fire.png" alt="fire"> <img src="img/icons/Water.png" alt="water">',
                  '<img src="img/icons/Dragon.png" alt="dragon"> <img src="img/icons/Rock.png" alt="rock"> <img src="img/icons/Poison.png" alt="poison">',
                  '<img src="img/icons/Steel.png" alt="steel"> <img src="img/icons/Dark.png" alt="dark"> <img src="img/icons/Bug.png" alt="bug">'],
         answer:0,
         description:"e.g Snorlax does not like going up against Gengar"
        },
        {
            question:'From the available types, what is <span class="type water">Water</span> not very effective against?',
            options:['<img src="img/icons/Water.png" alt="water"> <img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Rock.png" alt="rock">',
                     '<img src="img/icons/Rock.png" alt="rock"> <img src="img/icons/Poison.png" alt="poison"> <img src="img/icons/Grass.png" alt="grass">',
                     '<img src="img/icons/Water.png" alt="water"> <img src="img/icons/Grass.png" alt="grass"> <img src="img/icons/Dragon.png" alt="dragon">',
                     '<img src="img/icons/Ice.png" alt="ice"> <img src="img/icons/Water.png" alt="water"> <img src="img/icons/Fighting.png" alt="fighting">'],
            answer:2,
        },
        {
            question:'It is said that, Grass is not very effective against more than FIVE different typings.',
            options:['True', 'False'],
            answer:0,
            description:'Yup, with a total of 7! Fire, Grass, Poison, Flying, Bug, Dragon and Steel'
        },
        {
            question:'Raikou would not be good against Pidgeot as <span class="type electric">Electric</span> is not very effective against <span class="type flying">Flying</span>',
            options:['True', 'False'],
            answer:1,
            description:'Infact, Electric typings, are super effective against Flying type Pok&eacute;mon'
        },
        {
            question:'From the available types, what is <span class="type ice">Ice</span> not very effective against?',
            options:['<img src="img/icons/Water.png" alt="water"> <img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Rock.png" alt="rock"> <img src="img/icons/Ice.png" alt="ice">',
                     '<img src="img/icons/Rock.png" alt="rock"> <img src="img/icons/Fire.png" alt="fire"> <img src="img/icons/Ice.png" alt="ice"> <img src="img/icons/Grass.png" alt="grass">',
                     '<img src="img/icons/Water.png" alt="water"> <img src="img/icons/Grass.png" alt="grass"> <img src="img/icons/Dragon.png" alt="dragon"><img src="img/icons/Fire.png" alt="fire">',
                     '<img src="img/icons/Fire.png" alt="fire"> <img src="img/icons/Water.png" alt="water"> <img src="img/icons/Ice.png" alt="ice"> <img src="img/icons/Steel.png" alt="steel">'],
            answer:3,
            description:"e.g Mamoswine isn't that great against Moltres"
        },
        {
            question:'From the available types, what is <span class="type ground">Ground</span> not very effective against?',
            options:['<img src="img/icons/Water.png" alt="water"> <img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Grass.png" alt="grass">',
                     '<img src="img/icons/Grass.png" alt="grass"> <img src="img/icons/Bug.png" alt="bug"> <img src="img/icons/Flying.png" alt="flying">',
                     '<img src="img/icons/Water.png" alt="water"> <img src="img/icons/Grass.png" alt="grass"> <img src="img/icons/Dragon.png" alt="dragon">',
                     '<img src="img/icons/Bug.png" alt="ice"> <img src="img/icons/Flying.png" alt="flying"> <img src="img/icons/Water.png" alt="water">'],
            answer:1,
            description:"e.g Earth Power would not be very effective against Pidgeot"
        },
        {
            question:'Machamp is not very effective against <span class="type ghost">Ghost</span> type Pok&eacute;mon',
            options:['True', 'False'],
            answer:1,
            description:'Cross chop will be laughed at by Haunter'
        },
        {
            question:'Machamp is not very effective against <span class="type dark">Dark</span> type Pok&eacute;mon',
            options:['True', 'False'],
            answer:1,
            description:'Cross chop will be laughed at by Tyranitar, just like Haunter'
        },
        {
            question:'not very effective against <span class="type ghost">Ghost</span> type Pok&eacute;mon',
            options:['True', 'False'],
            answer:0,
            description:'Cross chop will be laughed at by Haunter'
        },

        ]
},

/* 






What is fighting not very effective against?
Answer: Poison, flying, psychic, bug, fairy, ghost
Dud answers:
Rock / Steel / Ice
Normal / Dark / Ice
Fire / Water / Grass

What is Poison not very effective against?
Answer: Poison, Ground, Rock, Ghost
Dud answers:
Grass / Fairy / Fire
Dragon / Normal / Fighting
Ice / Water / Dark



What is Flying not very effective against?
Answers: Electric, Rock, Steel
Dud answers:
Bug / Grass / Fighting
Fire / Water / Grass
Dragon / Fairy / Normal


What is Psychic not very effective against?
Answer: Psychic, steel
Dud answers:
Fire / Dragon / Fighting 
Ghost / Bug / Poison
Water / Grass / Electric

What is Bug not very effective against?
Answer: Fire, Fighting, Poison, Flying, Ghost, Steel, Fairy
Dud answers:
Grass / Dark / Psychic 
Normal / Dragon / Dark
Electric / Psychic / Dark

What is Rock not very effective against?
Answer: Fighting, Ground, Steel
Dud answers:
Flying / Ice / Fire
Water / Grass / Rock
Rock / Dark / Ghost

What is Ghost not very effective against?
Answer: Dark, normal
Dud answers:
Psychic / Ghost / Fairy 
Fire / Water / Electric
Bug / Poison / Dragon


What is Dragon not very effective against?
Answer: Steel & Fairy
Dud answers: 
Fighting / Dark / Flying
Ice / Rock / Electric
Fire / Water / Grass



What is Steel not very effective against?
Answer: Fire, Water, Steel, Electric
Dud answers:
Rock / Ice / Fairy
Grass / Fighting / Ground
Bug / Poison / Psychic


What is Fairy not very effective against?
Answer: Fire, Poison, Steel
Dud answers:
Dragon / Fighting / Dark 
Ghost / Psychic / Bug
Water / Grass / Electric


Pok&eacute;mon ##################################################################################
#################################################################################################



DOUBLE RESISTED QUESTIONS and answers lol
What does normal double resist?
Answer: Ghost
Dud answers:
Fighting 
Fairy
Dark

What does Ground double resist?
Answer: Electric
Dud answers:
Water
Poison 
Rock

What does flying double resist?
Answer: Ground
Dud answers:
Electric
Ice
Rock

What does ghost double resist?
Answer: Normal / Fighting
Dud answers:
Poison / Ghost
Bug / Steel
Dark / Poison


What does dark double resist?
Answer: Psychic
Dud answers:
Fighting 
Bug
Fairy

What does steel double resist?
Answer: Poison
Dud answers:
Fire
Fighting
Ground 

What does Fairy double resist?
Answer: Dragon
Dud answers:
Poison
Steel
Fairy


*/




{
    category:"Double Resisted",
    quizWrap:[ 
        {
            question:'From the available types, what is <span class="type water">Water</span> not very effective against?',
            options:['<img src="img/icons/Water.png" alt="water"> <img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Rock.png" alt="rock">',
                     '<img src="img/icons/Rock.png" alt="rock"> <img src="img/icons/Poison.png" alt="poison"> <img src="img/icons/Grass.png" alt="grass">',
                     '<img src="img/icons/Water.png" alt="water"> <img src="img/icons/Grass.png" alt="grass"> <img src="img/icons/Dragon.png" alt="dragon">',
                     '<img src="img/icons/Ice.png" alt="ice"> <img src="img/icons/Water.png" alt="water"> <img src="img/icons/Fighting.png" alt="fighting">'],
            answer:2,
           }
        ]
},
{
    category:"Mixed",
    quizWrap:[ 
            {
            question:'From the available types, what is <span class="type grass">Grass</span> super effective against?',
            options:['<img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Water.png" alt="fire"><img src="img/icons/Dark.png" alt="dark">',
                     '<img src="img/icons/Water.png" alt="water"> <img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Rock.png" alt="rock">', 
                     '<img src="img/icons/Dark.png" alt="dark"> <img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Rock.png" alt="rock">', 
                     '<img src="img/icons/Rock.png" alt="rock"> <img src="img/icons/Water.png" alt="ground"> <img src="img/icons/Electric.png" alt="electric">'],
            answer:1,
            description:"Frenzy Plant is super effective against Groudon."
            },
            {
              question:' From the available types, what is <span class="type fire">Fire</span> super effective against?',
              options:['<img src="img/icons/Fairy.png" alt="grass"> <img src="img/icons/Water.png" alt="water"><img src="img/icons/Bug.png" alt="bug">', 
                       '<img src="img/icons/Fairy.png" alt="fairy"> <img src="img/icons/Bug.png" alt="bug"> <img src="img/icons/Steel.png" alt="steel">',
                       '<img src="img/icons/Grass.png" alt="grass"> <img src="img/icons/Ice.png" alt="ice"> <img src="img/icons/Bug.png" alt="bug">', 
                       '<img src="img/icons/Grass.png" alt="grass"> <img src="img/icons/Ice.png" alt="ice"> <img src="img/icons/Normal.png" alt="steel">'],
              answer:2
          },
          {
              question:' From the available types, what is <span class="type water">Water</span> super effective against?',
              options:['<img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Fire.png" alt="fire"> <img src="img/icons/Rock.png" alt="rock">',
                       '<img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Fire.png" alt="fire"><img src="img/icons/Grass.png" alt="grass">', 
                       '<img src="img/icons/Rock.png" alt="rock"> <img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Electric.png" alt="electric">', 
                       '<img src="img/icons/Water.png" alt="water"> <img src="img/icons/Rock.png" alt="ground"> <img src="img/icons/Electric.png" alt="electric">'],
              answer:0
          },
          {
            question:'From the available types, what is <span class="type normal">Normal</span> not very effective against?',
            options:['<img src="img/icons/Rock.png" alt="rock"> <img src="img/icons/Ghost.png" alt="ghost"> <img src="img/icons/Steel.png" alt="steel">',
                     '<img src="img/icons/Rock.png" alt="rock"> <img src="img/icons/Fire.png" alt="fire"> <img src="img/icons/Water.png" alt="water">',
                     '<img src="img/icons/Dragon.png" alt="dragon"> <img src="img/icons/Rock.png" alt="rock"> <img src="img/icons/Poison.png" alt="poison">',
                     '<img src="img/icons/Steel.png" alt="steel"> <img src="img/icons/Dark.png" alt="dark"> <img src="img/icons/Bug.png" alt="bug">'],
            answer:0,
            description:"e.g Snorlax does not like going up against Gengar"
           },
           {
               question:'From the available types, what is <span class="type water">Water</span> not very effective against?',
               options:['<img src="img/icons/Water.png" alt="water"> <img src="img/icons/Ground.png" alt="ground"> <img src="img/icons/Rock.png" alt="rock">',
                        '<img src="img/icons/Rock.png" alt="rock"> <img src="img/icons/Poison.png" alt="poison"> <img src="img/icons/Grass.png" alt="grass">',
                        '<img src="img/icons/Water.png" alt="water"> <img src="img/icons/Grass.png" alt="grass"> <img src="img/icons/Dragon.png" alt="dragon">',
                        '<img src="img/icons/Ice.png" alt="ice"> <img src="img/icons/Water.png" alt="water"> <img src="img/icons/Fighting.png" alt="fighting">'],
               answer:2,
           },
           {
               question:'It is said that, Grass is not very effective against more than FIVE different typings.',
               options:['True', 'False'],
               answer:0,
               description:"Yup, with a total of 7! Fire, Grass, Poison, Flying, Bug, Dragon and Steel"
           },
           {
               question:'Azumarill would be good against Altaria because <span class="type fairy">Fairy</span> is super effective against <span class="type dragon">Dragon</span>',
               options:['True', 'False'],
               answer:0
           },
           {
               question:'Cresselia would be good against both Machamp and Nidoking as <span class="type psychic">Psychic</span> is super effective against <span class="type fighting">Fighting</span> and <span class="type poison">Poison</span>',
               options:['True', 'False'],
               answer:0
           },
           {
              question:'Golem would be good against Venusaur as <span class="type rock">Rock</span> is super effective against <span class="type grass">Grass</span>',
              options:['True', 'False'],
              answer:1
           },
        ]
},

/*{
    category:"Speed Test",
    quizWrap:[{question:'Under-Development',

    }]
}*/
 ]
       


    function createCategory(){
     // console.log(myApp[1].category);
     for(let i=0; i<myApp.length; i++){
     	const categoryList=document.createElement("div");
     	     categoryList.innerHTML=myApp[i].category;
     	     categoryList.setAttribute("data-id",i);
     	     categoryList.setAttribute("onclick","selectCategory(this)");
     	     categoryBox.appendChild(categoryList)
     }
    }
       
function selectCategory(ele){
    categoryIndex=ele.getAttribute("data-id");
     categoryText.innerHTML=myApp[categoryIndex].category;
     quizHomeBox.classList.remove("show");
  	 quizBox.classList.add("show");
  	 setAvailableQuestion();
     nextQuestion();
}
function setAvailableQuestion(){
	const totalQuestion = myApp[categoryIndex].quizWrap.length;
    for(let i=0; i<totalQuestion; i++){
    	availableQuestions.push(myApp[categoryIndex].quizWrap[i])
    }
}

  function load(){
  	number++;
    questionText.innerHTML=currentQuestion.question;
    createOptions();
    scoreBoard();
    currentQuestionNum.innerHTML=number + " / " + myApp[categoryIndex].quizWrap.length;
  }

  function createOptions(){
  	optionBox.innerHTML="";
  	let animationDelay=0.2;
  	 for(let i=0; i<currentQuestion.options.length; i++){
  	   const option=document.createElement("div");
  	         option.innerHTML=currentQuestion.options[i];
  	         option.classList.add("option");
  	         option.id=i;
  	         option.style.animationDelay=animationDelay + "s";
  	         animationDelay=animationDelay+0.2;
  	         option.setAttribute("onclick","check(this)");
  	         optionBox.appendChild(option);
  	 }
  }
  
  function generateRandomQuestion(){
      const randomNumber=availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
      currentQuestion = randomNumber;
      const index1= availableQuestions.indexOf(randomNumber);
    // remove the 'questionIndex' from the availableQuestion Array, so that the question does not repeat
    availableQuestions.splice(index1,1);
      load();
  }

 function check(ele){
 	  const id=ele.id;
 	  if(id==currentQuestion.answer){
 	  	ele.classList.add("correct");
 	  	score++;
 	  	scoreBoard();
 	  }
 	  else{
 	  	ele.classList.add("wrong");
 	  	// show correct option when clicked answer is wrong
 	  	 for(let i=0; i<optionBox.children.length; i++){
            if(optionBox.children[i].id==currentQuestion.answer){
            	optionBox.children[i].classList.add("show-correct");
            }
 	  	 }
 	  }
 	  attempt++;
 	  disableOptions()
 	  showAnswerDescription();
 	  showNextQuestionBtn();
 	  stopTimer();

 	  if(number == myApp[categoryIndex].quizWrap.length){
 	  	quizOver();
 	  }
 }

 function timeIsUp(){

 	  showTimeUpText();
     // when time is up show correct answer
     for(let i=0; i<optionBox.children.length; i++){
            if(optionBox.children[i].id==currentQuestion.answer){
            	optionBox.children[i].classList.add("show-correct");
            }
 	  	 }

 	  disableOptions()
 	  showAnswerDescription();
 	  showNextQuestionBtn();
    
   if(number == myApp[categoryIndex].quizWrap.length){
      quizOver();
    }
    
 }

 function startTimer(){
      let timeLimit=15;
      remainingTime.innerHTML=timeLimit;
      remainingTime.classList.remove("less-time");
      interval=setInterval(()=>{
        timeLimit--;
        if(timeLimit < 10){
        	timeLimit="0"+timeLimit;
        }
        if(timeLimit < 6){
         remainingTime.classList.add("less-time");
        }
        remainingTime.innerHTML=timeLimit;
        if(timeLimit == 0){
        	clearInterval(interval);
        	timeIsUp();
        }
      },1000)
 }

function stopTimer(){
    clearInterval(interval);
}

 function disableOptions(){
 	for(let i=0; i<optionBox.children.length; i++){
 		// optionBox.children[i].classList.add("already-answered");
 		optionBox.children[i].removeAttribute("onclick");
 	}
 }

 function showAnswerDescription(){
 	if(typeof currentQuestion.description !== 'undefined'){
 		 answerDescription.classList.add("show");
         answerDescription.innerHTML=currentQuestion.description;
 	}
 }
 function hideAnswerDescription(){
 	answerDescription.classList.remove("show");
    answerDescription.innerHTML="";
 }
 function showNextQuestionBtn(){
 	nextQuestionBtn.classList.add("show");
 }
 function hideNextQuestionBtn(){
 	nextQuestionBtn.classList.remove("show");
 }
 function showTimeUpText(){
 	timeUpText.classList.add("show");
 }
function hideTimeUpText(){
 	timeUpText.classList.remove("show");

 }
 function scoreBoard(){
 	correctAnswers.innerHTML=score;
 }

 nextQuestionBtn.addEventListener("click",nextQuestion);

 function nextQuestion(){
 	 generateRandomQuestion();
 	 hideNextQuestionBtn();
 	 hideAnswerDescription();
 	 hideTimeUpText();
 	 startTimer();
 }

 function quizResult(){
   document.querySelector(".total-questions").innerHTML=myApp[categoryIndex].quizWrap.length;
   document.querySelector(".total-attemp").innerHTML=attempt;
   document.querySelector(".total-correct").innerHTML=score;
   document.querySelector(".total-wrong").innerHTML=attempt-score;
   const percentage=(score/myApp[categoryIndex].quizWrap.length)*100;
   document.querySelector(".percentage").innerHTML=percentage.toFixed(2) + "%";
 }
 function resetQuiz(){
   attempt=0;
   // questionIndex=0;
   score=0;
   number=0;
   myArray=[];
 }

 function quizOver(){
     nextQuestionBtn.classList.remove("show");
     seeResultBtn.classList.add("show");
 }

  seeResultBtn.addEventListener("click",()=>{
  	  
  	  quizBox.classList.remove("show");
  	  seeResultBtn.classList.remove("show");
      quizOverBox.classList.add("show");
      quizResult();
  })

  startAgainQuizBtn.addEventListener("click",()=>{
  	quizBox.classList.add("show");
    quizOverBox.classList.remove("show");
    resetQuiz();
    setAvailableQuestion();
    nextQuestion();
  })

  goHomeBtn.addEventListener("click",()=>{
  	quizOverBox.classList.remove("show");
  	quizHomeBox.classList.add("show");
    resetQuiz();
  })
        
  window.onload=()=>{
    createCategory();
  }

 






