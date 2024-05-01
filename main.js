let con=document.getElementById("container");
	let sw1=document.getElementById("switch");
	  let questionbar=document.querySelector(".bar");

function switchbtn() {
con.style.background="url(back2.jpg)";
sw1.onclick=switchbtn2;
}
function switchbtn2(){
con.style.background="url(back1.jpg) ";
con.style.backgroundSize="100% ";
sw1.onclick=switchbtn;

}
let questiones=[{numd:1
	,question:"WHAT  IS  HTML  STANDS  FOR ?"
	,answers:"hyper text markup language",
options:["hyper text markup language",
"hyper text mahof languse",
"hyper title markup language",
"head text make language"]},{numd:2
	,question:"WHAT  IS  accessbility  STANDS  FOR ?"
	,answers:"accessbility",
options:["hyper text markup language",
"accessbility",
"hyper title markup language",
"head text make language"]},{numd:3
	,question:"WHAT  IS  php  STANDS  FOR ?"
	,answers:"Hypertext Preprocessor ",
options:["hyper text markup language",
"hyper text mahof languse",
"Hypertext Preprocessor ",
"head text make language"]},{numd:4
	,question:"WHAT  IS  css  STANDS  FOR ?"
	,answers:"cascade styling sheet",
options:["cute styling sheet",
"cascade styling sheet",
"code style sheet",
"can list sheet"]},{numd:5
	,question:"WHAT  IS  js  STANDS  FOR ?"
	,answers:"java script",
options:["java styling",
"json script",
"jq scene",
"java script"]}];
let questioncount=0;
let sub=document.querySelector(".submit");
let questionhead=document.querySelector(".questionname");
const optionlist=document.querySelector('.choices');
let result=document.querySelector('.resultbox');
let questioncon=document.querySelector('.questions');
let tryagain=document.querySelector('.tryagain-btn');
let userscore=0;
showquestion(0);
headerscore();
questionbar.style.width="10%";
//getting questions from array
function showquestion(index) {
	const questiontext=document.querySelector('.question');
	questiontext.textContent=`${questiones[index].numd}.${questiones[index].question}.`
	questionhead.textContent="question"+`${questiones[index].numd}`+" of " +`${questiones.length}`;
	let optiontag=`<div class="option"><span>${questiones[index].options[0]}</span></div>
	<div class="option"><span>${questiones[index].options[1]}</span></div>
	<div class="option"><span>${questiones[index].options[2]}</span></div>
	<div class="option"><span>${questiones[index].options[3]}</span></div>`;
	optionlist.innerHTML=optiontag;
	const option=document.querySelectorAll('.option');
	for(let i=0;i<option.length;i++){
		option[i].setAttribute('onclick','optionselected(this)');
	}
}
tryagain.onclick=()=>{
	result.classList.remove('active');
	questioncon.classList.remove('active');
	questioncount=0;
	userscore=0;
	startw=0;
	showquestion(questioncount);
	headerscore();
showprogress();

}
function showprogress(){
	let startw=10;
	let speed1=20;
	let endvalue=(userscore/questiones.length)*100;
let barpro=setInterval(()=>{
startw++;
questionbar.style.width=`${startw}%`;
if(startw>=endvalue){
	clearInterval(barpro);
}
},speed1);
}
function optionselected(answer){
	let useranswer=answer.textContent;
	let correctanswer=questiones[questioncount].answers;
	let alloptions=optionlist.children.length;
	//console.log(correctanswer);
	if(useranswer==correctanswer){
		answer.classList.add('correct');
       userscore+=1;
       headerscore();
}

	else{
		answer.classList.add('incorrect');
		for(let i=0;i<alloptions;i++){
		if(optionlist.children[i].textContent==correctanswer){
			optionlist.children[i].setAttribute('class','option correct');}
}
			sub.classList.add('active');

	}


	for(let i=0;i<alloptions;i++){
		optionlist.children[i].classList.add('disabled');
	}
		sub.classList.add('active');

									}
function submitquestion(){
	if(questioncount < questiones.length -1)
	{
		questioncount++;
	showquestion(questioncount);
	sub.classList.remove('active');
}
	else
{       
		sub.classList.add('active');
		showresultbox();
	}
	showprogress();

}
function headerscore(){
	const headerscoretext=document.querySelector(".score");
	headerscoretext.textContent=`score:${userscore} / ${questiones.length}`;
}
function showresultbox(){
questioncon.classList.add('active');
result.classList.add('active');
const scoretext=document.querySelector('.scoretext');
scoretext.textContent=`your score is ${userscore} out of ${questiones.length}`;
const circularprogress=document.querySelector('.circularprogress');
const pprogress=document.querySelector('.progressvalue');
let startprogressvalue=-1;
let endprogressvale=(userscore/questiones.length)*100;
let speed=20;
let progress=setInterval(()=>{
startprogressvalue++;
pprogress.textContent=`${startprogressvalue}%`;
circularprogress.style.background=`conic-gradient(#c40094 ${startprogressvalue*3.6}deg,rgba(255, 255, 255, .1) 0deg)`;
if(startprogressvalue==endprogressvale){
	clearInterval(progress);
}
},speed);

}