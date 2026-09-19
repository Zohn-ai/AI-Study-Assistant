const data={
web:[
["What does HTML define?",["Page structure","Database tables","Network routing","CPU instructions"],0,"HTML defines the structure and semantic content of web pages."],
["Which CSS property changes text color?",["font-size","color","display","padding"],1,"The color property controls text color."],
["Which method selects an element by ID?",["query()","getElementById()","select()","find()"],1,"document.getElementById() selects an element by its id."],
["What is JSON commonly used for?",["Data exchange","CSS styling","Image editing","Hardware control"],0,"JSON is commonly used to exchange structured data."],
["Which tag creates a hyperlink?",["<a>","<link>","<url>","<href>"],0,"The anchor element <a> creates hyperlinks."]
],
db:[
["What uniquely identifies a row?",["Foreign key","Primary key","View","Index file"],1,"A primary key uniquely identifies a row."],
["Which SQL command retrieves data?",["SELECT","INSERT","UPDATE","DELETE"],0,"SELECT retrieves data from tables."],
["What does a foreign key establish?",["A table relationship","A password","A backup","A CSS rule"],0,"A foreign key references a key in another table."],
["Which JOIN returns matching rows?",["INNER JOIN","ONLY JOIN","MATCH JOIN","LOCAL JOIN"],0,"INNER JOIN returns rows satisfying the join condition."],
["What does normalization reduce?",["Redundancy","CPU speed","Table names","Network latency"],0,"Normalization reduces redundant data and update anomalies."]
],
code:[
["What is a variable?",["Named storage for a value","A database","A server","A cable"],0,"Variables store values used by a program."],
["What does a loop do?",["Repeats instructions","Deletes files","Creates hardware","Encrypts data"],0,"Loops repeat a block of instructions."],
["What is a function?",["Reusable code block","A database row","A CSS class","A network port"],0,"Functions package reusable behavior."],
["What is an array?",["Collection of values","Single boolean","Compiler","Password"],0,"An array stores multiple values in one collection."],
["What is debugging?",["Finding and fixing errors","Writing only comments","Installing software","Designing UI"],0,"Debugging is locating and correcting program defects."]
],
ai:[
["What does AI stand for?",["Artificial Intelligence","Automated Internet","Advanced Interface","Algorithmic Input"],0,"AI means Artificial Intelligence."],
["What is machine learning?",["Learning patterns from data","Writing HTML","Installing hardware","Compressing files"],0,"Machine learning learns patterns from examples."],
["What is a training dataset?",["Examples used to train a model","A CSS file","A server address","A keyboard"],0,"Training data provides examples from which a model learns."],
["What is classification?",["Predicting categories","Drawing UI","Encrypting text","Sorting cables"],0,"Classification assigns inputs to predefined categories."],
["What is a prompt?",["Instruction for an AI model","Database key","Network packet","Loop"],0,"A prompt guides a generative AI model."]
]};
const names={web:"Web Development",db:"Database",code:"Programming",ai:"Artificial Intelligence"};
let questions=[],i=0,score=0,answered=false,n=5;
document.querySelectorAll(".level").forEach(b=>b.onclick=()=>{document.querySelectorAll(".level").forEach(x=>x.classList.remove("active"));b.classList.add("active")});
document.querySelectorAll(".num").forEach(b=>b.onclick=()=>{document.querySelectorAll(".num").forEach(x=>x.classList.remove("active"));b.classList.add("active");n=+b.dataset.v});
start.onclick=startQuiz;next.onclick=next;again.onclick=startQuiz;
function startQuiz(){const k=subject.value;questions=[...data[k]].sort(()=>Math.random()-.5).slice(0,n);i=0;score=0;empty.hidden=true;result.hidden=true;quiz.hidden=false;render()}
function render(){answered=false;const q=questions[i];cat.textContent=names[subject.value];document.getElementById("q").textContent=q[0];count.textContent=`${i+1} / ${questions.length}`;bar.style.width=`${(i+1)/questions.length*100}%`;document.getElementById("score").textContent=`Score: ${score}`;next.disabled=true;feedback.hidden=true;answers.innerHTML=q[1].map((a,j)=>`<button class="answer" onclick="choose(${j},this)">${a}</button>`).join("")}
function choose(j,btn){if(answered)return;answered=true;const q=questions[i];document.querySelectorAll(".answer")[q[2]].classList.add("correct");if(j===q[2])score++;else btn.classList.add("wrong");document.getElementById("score").textContent=`Score: ${score}`;feedback.textContent="💡 "+q[3];feedback.hidden=false;next.disabled=false}
function next(){i++;i<questions.length?render():finish()}
function finish(){quiz.hidden=true;result.hidden=false;const p=Math.round(score/questions.length*100);final.textContent=p+"/100";resultTitle.textContent=p>=80?"Excellent work!":p>=60?"Good progress!":"Keep practicing!";message.textContent=`You answered ${score} of ${questions.length} correctly. Try another topic or difficulty.`}