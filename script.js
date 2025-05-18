const cricketQuiz = [
  {
    question: "Who is known as the 'God of Cricket'?",
    options: ["Virat Kohli", "Sachin Tendulkar", "Brian Lara", "Muttiah Muralitharan"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which country won the first ever Cricket World Cup in 1975?",
    options: ["India", "Australia", "West Indies", "England"],
    answer: "West Indies"
  },
  {
    question: "How many players are there in a cricket team on the field?",
    options: ["10", "11", "12", "9"],
    answer: "11"
  },
  {
    question: "What is the maximum number of overs allowed per bowler in a 50-over match?",
    options: ["5", "10", "15", "20"],
    answer: "10"
  },
  {
    question: "Who has scored the fastest century in ODI cricket?",
    options: ["AB de Villiers", "Chris Gayle", "Virender Sehwag", "Shahid Afridi"],
    answer: "AB de Villiers"
  },
  {
    question: "Which ground is known as the 'Home of Cricket'?",
    options: ["Eden Gardens", "Lords", "Melbourne Cricket Ground", "Old Trafford"],
    answer: "Lords"
  },
  {
    question: "What does LBW stand for?",
    options: ["Leg Before Wicket", "Leg Behind Wicket", "Long Boundary Wicket", "Leg Between Wickets"],
    answer: "Leg Before Wicket"
  },
  {
    question: "Which country has won the most ICC Cricket World Cups?",
    options: ["India", "West Indies", "Australia", "England"],
    answer: "Australia"
  },
  {
    question: "In which year did India win its first Cricket World Cup?",
    options: ["1975", "1983", "1987", "1992"],
    answer: "1983"
  },
  {
    question: "Who holds the record for the highest individual score in Test cricket?",
    options: ["Brian Lara", "Matthew Hayden", "Virat Kohli", "Don Bradman"],
    answer: "Brian Lara"
  },
  {
    question: "What color ball is used in day-night Test matches?",
    options: ["Red", "White", "Pink", "Orange"],
    answer: "Pink"
  },
  {
    question: "Which cricketer is nicknamed 'The Hitman'?",
    options: ["Shikhar Dhawan", "Rohit Sharma", "Virat Kohli", "MS Dhoni"],
    answer: "Rohit Sharma"
  },
  {
    question: "Which team won the ICC T20 World Cup in 2022?",
    options: ["India", "England", "Pakistan", "New Zealand"],
    answer: "England"
  },
  {
    question: "Who was the captain of the Indian cricket team during the 2011 World Cup win?",
    options: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Yuvraj Singh"],
    answer: "MS Dhoni"
  },
  {
    question: "Which bowler has taken the most wickets in international cricket?",
    options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "How many runs is a boundary worth if the ball crosses the boundary without touching the ground?",
    options: ["4", "5", "6", "2"],
    answer: "6"
  },
  {
    question: "Which country hosted the 2019 Cricket World Cup?",
    options: ["India", "Australia", "England", "South Africa"],
    answer: "England"
  },
  {
    question: "What is a 'hat-trick' in cricket?",
    options: ["Three wickets in three balls", "Three sixes in an over", "Three consecutive fifties", "Three run-outs in an innings"],
    answer: "Three wickets in three balls"
  },
  {
    question: "Who is the first cricketer to score 100 international centuries?",
    options: ["Virat Kohli", "Ricky Ponting", "Sachin Tendulkar", "Kumar Sangakkara"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which Indian bowler is known as the 'Yorker King'?",
    options: ["Zaheer Khan", "Jasprit Bumrah", "Mohammed Shami", "Ashish Nehra"],
    answer: "Jasprit Bumrah"
  }
];


function randomQuestion(){

    // **********FIRST METHOD *************************
    // const data = new Set();

    // //set for unique object
    // while(data.size!=5){
    //     const index = Math.floor(Math.random()*20); 
    //     data.add(cricketQuiz[index]);
    // }

    // return[...data];

    // *******************SECOND METHOD******************
    // cricketQuiz.sort(()=> Math.random()-0.5);
    // return cricketQuiz.slice(0,5);


    // ****************THIRD METHOD**********************
    const arr = [];
    let length = cricketQuiz.length;

    for(let i = 0; i < 5; i++){
        const index = Math.floor(Math.random()*length);
        arr.push(cricketQuiz[index]);

        //swap
        [cricketQuiz[index], cricketQuiz[length - 1]] = [cricketQuiz[length - 1], cricketQuiz[index]]
        length--;
    }
    return arr;
}


//select the form and insert all the elements into it
const form = document.querySelector('form');

const problem = randomQuestion();

const originalAnswer = {};

problem.forEach((obj, index)=>{
    
    const div = document.createElement('div');
    div.className = 'question';
    originalAnswer[`Q${index + 1}`] = obj['answer'];

    const para = document.createElement('p');
    para.textContent = `${index + 1} ${obj['question']}`;
    div.appendChild(para);



    obj['options'].forEach((data)=>{
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = "radio";
        input.name = `Q${index + 1}`;
        input.value = data;

        label.appendChild(input);
        label.appendChild(document.createTextNode(data));
        div.appendChild(label);
        div.appendChild(document.createElement('br'));
    })

    form.appendChild(div);
})

    const button = document.createElement('button');
    button.type = 'submit';
    button.className = 'submit-btn';
    button.textContent = 'Submit';
    form.appendChild(button);


//check the submitted button
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    const data = new FormData(form);


    let result = 0;

    for(let [key, value] of data.entries()){
        if(value === originalAnswer[key])
            result++;
    }



    const out = document.getElementById('out');
    console.log(result);
    out.innerText = `${result} out of 5 is correct`;


    form.reset();
})