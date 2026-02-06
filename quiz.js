let questionBook=[
    {
        id:"qa-1",
        question:"1. What does HTML stand for?",
        options:[ 
            "Hyper Tool Markup Language", 
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language"
        ],
        correctAnswer:"Hyper Text Markup Language"  
    },{
        id:"qa-2",
        question:"Which tag is used to insert an image in HTML?",
        options:[ 
            "<image>", 
            "<img>",
            "<pic>",
            "<src>"
        ],
        correctAnswer:"<img>"     
    }, {
        id:"qa-3",
        question:"Which CSS property changes text color?",
        options:[ 
            "font-color", 
            "text-style",
            "color",
            "background"
        ],
        correctAnswer:"color"     
    },{
        id:"qa-4",
        question:"Which symbol is used for single-line comments in JavaScript?",
        options:[ 
            "/* */", 
            "#",
            "//",
            "<!-- -->"
        ],
        correctAnswer:"//"     
    },{
        id:"qa-5",
        question:"Which JavaScript method selects an element by ID?",
        options:[ 
            "getElement()", 
            "getElementById()",
            "querySelectorAll()",
            "selectById()"
        ],
        correctAnswer:"getElementById()"     
    },{
        id:"qa-6",
        question:"Which keyword is used to declare a constant variable?",
        options:[ 
            "var", 
            "let",
            "const",
            "static"
        ],
        correctAnswer:"const"     
    },{
        id:"qa-7",
        question:"Which CSS property is used to create space outside an element?",
        options:[ 
            "padding", 
            "margin",
            "border",
            "spacing"
        ],
        correctAnswer:"margin"     
    },{
        id:"qa-8",
        question:"What is the full form of JS?",
        options:[ 
            "Java Selectors", 
            "Java Selenium",
            "JavaScript",
            "Java Syntax"
        ],
        correctAnswer:"JavaScript"     
    },{
        id:"qa-9",
        question:"What is the full form of ES?",
        options:[ 
            "Easy Selector", 
            "ECMA script",
            "Easy script",
            "None of these"],
        correctAnswer:"ECMA script"     
    },{
        id:"qa-10",
        question:"What is the full form of DOM?",
        options:[ 
            "Document oriented model", 
            "Document object model",
            "Document oriented manipulation",
            "Design object model"],
        correctAnswer:"Document object model",    
    }, {
        id:"qa-11",
        question:"What is the full form of BOM?",
        options:[ 
            "Browser object model",
            "Browser oriented model",
            "Box object model",
            "Box office model"],
        correctAnswer:"Browser object model"     
    }, {
        id:"qa-12",
        question:"What is the full form of TDZ?",
        options:[ 
            "Temporal dual zone",
             "Time dual zone",
             "Temporal dead zone",
             "Time dead zone"],
        correctAnswer:"Temporal dead zone",    
    }, {
        id:"qa-13",
        question:"Which event occurs when a page finishes loading?",
        options:[ 
            "onclick", 
            "onload",
            "onchange",
            "onsubmit"
        ],
        correctAnswer:"onload"     
    }, {
        id:"qa-14",
        question:"Which HTML attribute provides extra information on hover?",
        options:[ 
            "name", 
            "value",
            "title",
            "hover"
        ],
        correctAnswer:"title"     
    }, {
        id:"qa-15",
        question:"Which HTML attribute is used to uniquely identify an element?",
        options:[ 
            "class", 
            "name",
            "id",
            "style"
        ],
        correctAnswer:"id"     
    }, {
        id:"qa-16",
        question:"Which CSS unit is relative to viewport width?",
        options:[ 
            "px", 
            "em",
            "vw",
            "rem"
        ],
        correctAnswer:"vw"     
    }, {
        id:"qa-17",
        question:"Which method adds an element to the end of an array?",
        options:[ 
            "pop()", 
            "shift()",
            "push()",
            "unshift()"
        ],
        correctAnswer:"push()"     
    },{
        id:"qa-18",
        question:"Which CSS property is used to make text bold",
        options:[ 
            "font-style", 
            "font-weight",
            "text-bold",
            "weight"
        ],
        correctAnswer:"font-weight"     
    },{
        id:"qa-19",
        question:"What does === mean in JavaScript?",
        options:[ 
            "Equal value", 
            "Equal type",
            "Equal value and type",
            "Assignment"
        ],
        correctAnswer:"Equal value and type"     
    },{
        id:"qa-20",
        question:"What is a JavaScript closure?",
        options:[ 
            "A loop inside a function", 
            "A function accessing variables from its outer scope",
            "A global variable",
            "A class"
        ],
        correctAnswer:"A function accessing variables from its outer scope"     
    },{
        id:"qa-21",
        question:"What will typeof null return?",
        options:[ 
            "null", 
            "undefined",
            "object",
            "number"
        ],
        correctAnswer:"object"     
    },{
        id:"qa-22",
        question:"Which array method removes the last element?",
        options:[ 
            "pop()", 
            "push()",
            "shift()",
            "splice()"
        ],
        correctAnswer:"pop()"     
    },{
        id:"qa-23",
        question:"Which HTML element is semantic?",
        options:[ 
            "<div>", 
            "<span>",
            "<section>",
            "<font>"
        ],
        correctAnswer:"<section>"     
    },{
        id:"qa-24",
        question:"Which CSS property is used for responsive layouts?",
        options:[ 
            "position", 
            "float",
            "display: flex",
            "visibility"
        ],
        correctAnswer:"display: flex"     
    },{
        id:"qa-25",
        question:"Which method converts JSON string to JavaScript object?",
        options:[ 
            "JSON.stringify()", 
            "JSON.parse()",
            "JSON.convert()",
            "JSON.object()"
        ],
        correctAnswer:"JSON.parse()"     
    },
  
];

let questionElement=document.getElementById("question");
let optionElement=document.getElementById("option");
let scoreElement=document.getElementById("score");
let currentQuestion=0;
let score=0;
function displayQuestion()
{
    let {id,question,options,correctAnswer}=questionBook[currentQuestion];

    questionElement.textContent=question;

    options=shuffleQuestion([...options]);

    options.map((opt,i)=>{
        let btn=document.createElement("button");
        btn.textContent=opt;
        btn.setAttribute("class","optionsButtons");
        optionElement.append(btn);

        btn.addEventListener("click",()=>{
            if(opt==correctAnswer){
                btn.style.backgroundColor="green";
                score +=1;
            }else{
                btn.style.backgroundColor="red";
                score-=0.25;
            }
            setTimeout(()=>{
               nextQuestion();

            },1000)
            // console.log(score);
            scoreElement.textContent=`
            score:${score}/${questionBook.length}`
            let allbtn=document.querySelectorAll(".optionButtons");
            allbtn.forEach((b)=>b.disabled=true)

        })
    })

}
displayQuestion();


function nextQuestion()
{
    currentQuestion++;
    optionElement.textContent="";
    if(currentQuestion == questionBook.length){
        questionElement.textContent="Quiz Completed Successfully!!! 🥳🥳";
    }else{
        displayQuestion();
    }
}

function shuffleQuestion(arr){
    for(let i=arr.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
        [arr[i],arr[j]]=[arr[j],arr[i]];

    }
    return arr;
}