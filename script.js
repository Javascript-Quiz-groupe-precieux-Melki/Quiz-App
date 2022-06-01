let gamer={nom: "", email:""};
let score=0;
let form=document.querySelector("form");
let homePage=document.querySelector(".home-page");
let homePageInputName=document.querySelector("#home-page__input-name");
let homePageInputEmail=document.querySelector("#home-page__input-email");
let main=document.querySelector("main");

let resultPage=document.createElement("div");
resultPage.classList.add("result-page");
main.appendChild(resultPage);

let questionPage=document.createElement("div");
questionPage.classList.add("question-page");
main.appendChild(questionPage);

let questionParagraph = document.createElement("p");
questionParagraph.classList.add("question-page__question");
questionPage.appendChild(questionParagraph);

let questionPageNumberAndChrono=document.createElement("div");
questionPageNumberAndChrono.classList.add("question-page__number-and-chrono");
let questionPageNumber=document.createElement("span");
questionPageNumber.classList.add("question-page__number");
questionPageNumberAndChrono.appendChild(questionPageNumber);
let questionPageTimeInText=document.createElement("span");
questionPageTimeInText.classList.add("question-page__time-in-text");
questionPageNumberAndChrono.appendChild(questionPageTimeInText);
questionPage.appendChild(questionPageNumberAndChrono);

let questionPageProgressBar=document.createElement("div");
questionPageProgressBar.classList.add("question-page__progress-bar");
questionPage.appendChild(questionPageProgressBar);

let progressBarGauge=document.createElement("span");
progressBarGauge.classList.add("progress-bar__gauge");
questionPageProgressBar.appendChild(progressBarGauge);

let questionPageChoiceList=document.createElement("div");
questionPageChoiceList.classList.add("question-page__choice-list");
questionPage.appendChild(questionPageChoiceList);

let choicesTable=[];

function createChoiceListElements () {
    for (let i=0; i<4; i++) {
        let choice =document.createElement("label");
        choice.classList.add("choice-list__element","choice1");
        choice.innerHTML=`<input type="radio" id="choice${i+1}" name="choice" value"choice${i+1}">.ts`
        choice.setAttribute("id",`label${i+1}`);
        choicesTable.push(choice);
        questionPageChoiceList.appendChild(choicesTable[i]);
    }    
}

createChoiceListElements();

let questionPageButtons=document.createElement("div");
questionPageButtons.classList.add("question-page__buttons");
questionPageChoiceList.appendChild(questionPageButtons);

let buttonQuit=document.createElement("button");
buttonQuit.classList.add("button-quit", "style-of-button");
buttonQuit.textContent="Quitter";
questionPageButtons.appendChild(buttonQuit);

let buttonNext=document.createElement("button");
buttonNext.classList.add("button-next", "style-of-button");
buttonNext.textContent="Suivant";
questionPageButtons.appendChild(buttonNext);

let resultPageGamerName=document.createElement("h2");
resultPageGamerName.classList.add("result-page__gamer-name");
resultPage.appendChild(resultPageGamerName);

let resultPageGamerEmail=document.createElement("p");
resultPageGamerEmail.classList.add("result-page__gamer-email");
resultPage.appendChild(resultPageGamerEmail);

// TODO SET UP THE BEST ICONS ON RESULT PAGE 

let resultPageIconSuccess=document.createElement("i");
resultPageIconSuccess.classList.add("far", "fa-check-circle", "result-page__icon");
resultPage.appendChild(resultPageIconSuccess);

let resultPageIconeFailed=document.createElement("i");
resultPageIconeFailed.classList.add("fa-regular", "fa-circle-xmark", "result-page__icon");
resultPage.appendChild(resultPageIconeFailed);

let resultPageScore=document.createElement("p");
resultPageScore.classList.add("result-page__score");
resultPage.appendChild(resultPageScore);

let buttonHome=document.createElement("button");
buttonHome.classList.add("button-home","style-of-button");
resultPage.appendChild(buttonHome);

let homePageForgetName=document.querySelector(".home-page__forget-name");
let homePageForgetEmail=document.querySelector(".home-page__forget-email");
let index=0;

let question_1={
    question: "Quel est le type d'un fichier JS ?",
    trueAnswer:".js",
    propositions: [".ts",".jsx", ".js",".j"]
};

let question_2={
    question: "Qu’est-ce que JavaScript ?",
    trueAnswer:"Un langage de script",
    propositions: ["Un langage issu de Java","Un langage de script","Un enfant de Java","Un jeu vidéo"] 
};

let question_3={
    question: "Il y a un intrus. Lequel ?",
    trueAnswer:"Decimal",
    propositions: ["String","Number","Boolean","Decimal"]
};

let question_4={
    question: "JavaScript est un langage sensible :",
    trueAnswer:"à la casse",
    propositions: ["à la classe","à la crasse","à la casse","ABR",] 
};

let question_5={
    question: "Si l'argument est un nombre, que renvoie la fonction isNaN ?",
    trueAnswer:"True",
    propositions:["True","False","Undefined","ABR"]
};

let question_6={
    question: "Quelle est la manière de mettre des commentaires en JavaScript ?",
    trueAnswer:"//Commentaires",
    propositions: ["//Commentaires", "<--! Commentaires-->", "(Commentaires)", "ABR"]
};

let question_7={
    question: "L'opérateur d'égalité ( == )",
    trueAnswer:"compare deux opérandes, puis renvoie un booléen",
    propositions: ["permet d'affecter une valeur", "renforce la sécurité", "compare deux opérandes, puis renvoie un booléen", "ABR"]
};

let question_8={
    question: "L'opérateur d'égalité ( = )",
    trueAnswer:"permet d'affecter une valeur.",
    propositions: ["permet d'affecter une valeur.", "renforce la sécurité.", "compare deux opérandes, puis renvoie un booléen.", "ABR"]
};

let question_9={
    question: "jour = [lundi, mardi, mercredi]. Comment accéder à \"lundi\" ?",
    trueAnswer:"jour[0]",
    propositions: ["jour[lundi]", "jour[1]", "jour[0]", "ABR"]
};

let question_10={
    question: "Quel est le symbole de l'opérateur logique OU ?",
    trueAnswer:"||",
    propositions: ["OU", "^", "||", "ABR"]
};

let question_11={
    question: "Quel est le symbole de l'opérateur logique ET ?",
    trueAnswer:"&&",
    propositions: ["&&", "^", "++", "ABR"]
};

let question_12={
    question: "i++ correspond à :",
    trueAnswer:"i=i+1",
    propositions: ["i=i+1", "i=1", "i=iii", "ABR"]
};

let question_13={
    question: "i-- correspond à :",
    trueAnswer:"i=i-1",
    propositions: ["i=--", "i=i-1", "i=-iii", "ABR"]
};

let question_14={
    question: "Comment créer une variable en JavaScript ?",
    trueAnswer:"let maVariable;",
    propositions: ["dim maVariable;", "create maVariable;", "print maVariable;", "let maVariable;"]
};

let question_15={
    question: "let kda=[2020, 2021, 2022]; Que va retourner l'instruction \"kda.length\" ?",
    trueAnswer:"3",
    propositions: ["3", "trois", "2", "deux"]
};

let listOfQuestions = [question_1, question_2, question_3, question_4, question_5, question_6,
    question_7, question_8,question_9,question_10,question_11,question_12, question_13,question_14,
    question_15];

let time=60;
let timeWidth=100;
let realTime=60;


// MY FUNCTIONS
function giveStyleToElementSelected () {
for (let i=0; i<choicesTable.length; i++) choicesTable[i].addEventListener("click", function (){ giveStyleWhenSelected(choicesTable[i])});
}

function giveStyleWhenSelected (element) {
    buttonNext.disabled=false;
    buttonNext.style.backgroundColor="#028A3D";
    for (let i=0; i<choicesTable.length; i++) {
        if (choicesTable[i].id==element.id) element.style.border="1px solid #028A3D";
        else choicesTable[i].style.border="1px solid #DDDDDD";
    }
}

function countDown(){
    if (time==0) {
        buttonNext.disabled=false;
        buttonNext.click();
    } else {
        questionPageTimeInText.textContent=time;
        time--;
    }
}

function timeWidthFunction () {
    realTime-=0.01;
    progressBarGauge.style.width=`${(100/60)*realTime}%`;
    if (time<10) progressBarGauge.style.backgroundColor="#FF3838";
    else progressBarGauge.style.backgroundColor="#028A3D";
}

let inputChoiceTable=[];
function displayQuestionAndChoice () {
    buttonNext.disabled=true;
    buttonNext.style.backgroundColor="rgba(2, 138, 61, 0.42)";
    time=60;
    realTime=60;
    questionPageTimeInText.textContent="60";
    questionParagraph.textContent=listOfQuestions[index].question;
    questionPageNumber.textContent="Question "+(index+1) +"/"+listOfQuestions.length;

    for (let i=0; i<choicesTable.length; i++) {
        choicesTable[i].style.border="1px solid #DDDDDD";
        choicesTable[i].innerHTML=`<input type="radio" id="choice${i+1}" name="choice" value="${listOfQuestions[index].propositions[i]}">${listOfQuestions[index].propositions[i]}`
    }

    for (let i=0; i<choicesTable.length; i++) {
        let input=document.querySelector(`#choice${i+1}`);
        inputChoiceTable.push(input);
    }
}

function ckeckTheChoice () {
    for (let i=0; i<choicesTable.length; i++) {
        if  (choicesTable[i].children[0].checked==true && choicesTable[i].children[0].value==listOfQuestions[index].trueAnswer) score+=1;
        choicesTable[i].children[0].checked=false;
    }
}

function displayResult () {
    resultPageGamerName.textContent=gamer.nom;
    resultPageGamerEmail.textContent=gamer.email;
    if (score>(listOfQuestions.length/2)) {
        resultPageIconeFailed.style.display="none";
    } else {
        resultPageIconSuccess.style.display="none";
        resultPageIconeFailed.style.color="#FF3838";
    }
    resultPageScore.textContent=score+"/15";
    buttonHome.textContent="Accueil";
}
// nom, email, forgetName, forgetEmail
function validate(input1, input2, error1, error2) {
    let masque = /\s/g; // Caractères blancs
    let masqueEmail = /(@[a-z]+.com)$/;
    if (masque.test(input1.value) || input1.value=="" || !(masqueEmail.test(input2.value)) || input2.value=="") {
        if (masque.test(input1.value) || input1.value=="") {
            input1.style.border="1px solid #FF3838";
            error1.style.display="block";
        }   
        if (!(masqueEmail.test(input2.value)) || input2.value=="") {
            input2.style.border="1px solid #FF3838";
            error2.style.display="block";
        }          
    }
    else {
        gamer.nom=input1.value;
        gamer.email=input2.value;
        homePage.style.display="none";
        questionPage.style.display="block";
        let x=setInterval(() => countDown(), 1000);
        let y=setInterval(() => timeWidthFunction(), 10);
        displayQuestionAndChoice ();
    } 
}

form.addEventListener("submit",function (event) {
    event.preventDefault();
    validate(homePageInputName, homePageInputEmail, homePageForgetName, homePageForgetEmail);
});
buttonNext.addEventListener("click", function (event) {
    if (index<listOfQuestions.length) {
        ckeckTheChoice();
        if (index==listOfQuestions.length-1) {
            questionPage.style.display="none";
            resultPage.style.display="flex";
            displayResult();
        } else {
            index++;
            displayQuestionAndChoice();
        }
    }    
});
buttonHome.addEventListener("click", function () { location.reload()});
buttonQuit.addEventListener("click", function() {
    questionPage.style.display="none";
    resultPage.style.display="flex";
    displayResult();
})

function hide (element) {
    element.style.display="none";
}

function showWithStyleFlexbox (element) {
    element.style.display="flex";
}

function showWithStyleBlock (element) {
    element.style.display="flex";
}

giveStyleToElementSelected();