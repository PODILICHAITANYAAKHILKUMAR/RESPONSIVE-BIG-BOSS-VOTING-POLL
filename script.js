var voteCount=document.querySelectorAll(".voteCount");
var percentageCount=document.querySelectorAll(".percentageCount");
var voteBtn=document.querySelectorAll(".voteBtn");
var votePercentage=document.querySelectorAll(".votePercentage");
var bar=document.querySelectorAll(".bar");
var totalVotes=document.querySelectorAll(".totalVotes");
var total=document.querySelector(".total");
var totalVotes=0;

function displayRadioValue() {
    var ele = document.querySelectorAll('input');
    
    for(j = 0; j < ele.length; j++) {
        
        if(ele[j].type="radio") {
        
            if(ele[j].checked){
            totalVotes++;
            voteCount[j].innerHTML=parseInt(voteCount[j].innerHTML)+1;
            main(j);
            }
        }
    }
}

window.onload=()=>{
    for(let i=0;i<voteBtn.length;i++){
        voteCount[i].innerHTML=0;
        percentageCount[i].innerHTML=0+'%';
        bar[i].style.width=0+'%';
        total.innerHTML="Total Votes: "+0;
        votePercentage[i].innerHTML=0+'%';
    }
}
for(let i=0;i<voteBtn.length;i++) {
    voteBtn[i].addEventListener("click",function() {
        totalVotes++;
        voteCount[i].innerHTML=parseInt(voteCount[i].innerHTML)+1;
       main(i);
    });
}
function main(k){
    for(let i=0;i<voteBtn.length;i++){
        percentageCount[i].innerHTML=(voteCount[i].innerHTML/totalVotes*100).toFixed(2)+'%';
        votePercentage[i].innerHTML=percentageCount[i].innerHTML+' '+'('+voteCount[i].innerHTML+' Votes'+')';
        bar[i].style.width=percentageCount[i].innerHTML;
        total.innerHTML="Total Votes: "+totalVotes;
    }
}
/*

var voteCount=document.querySelectorAll(".voteCount");
var percentageCount=document.querySelectorAll(".percentageCount");
var voteBtn=document.querySelectorAll(".voteBtn");
var votePercentage=document.querySelectorAll(".votePercentage");
var bar=document.querySelectorAll(".bar");
var totalVotes=document.querySelectorAll(".totalVotes");
var total=document.querySelector(".total");
var totalVotes=0;
var voteCountArray=[];
var percentageCountArray=[];
var votePercentageArray=[];
var totalVotesArray;
var barArray=[];
var voteCountString,percentageCountString,votePercentageString,totalVotesString,barString;
function displayRadioValue() {
    var ele = document.querySelectorAll('input');
    
    for(j = 0; j < ele.length; j++) {
        
        if(ele[j].type="radio") {
        
            if(ele[j].checked){
            totalVotes++;
            voteCount[j].innerHTML=parseInt(voteCount[j].innerHTML)+1;
            main(j);
            }
        }
    }
}

window.onload=()=>{
            voteCountArray=JSON.parse(localStorage.getItem('voteCountString'));
            percentageCountArray=JSON.parse(localStorage.getItem('percentageCountString'));
            votePercentageArray=JSON.parse(localStorage.getItem('votePercentageString'));
            totalVotesArray=localStorage.getItem('totalVotesString');
            barArray=JSON.parse(localStorage.getItem('barString'));
            totalVotes=totalVotesArray;
        for(let i=0;i<voteBtn.length;i++){
        
            voteCount[i].innerHTML=voteCountArray[i];
            
            percentageCount[i].innerHTML=percentageCountArray[i]+'%';
            votePercentage[i].innerHTML=votePercentageArray[i]+'%';
            total.innerHTML="Total Votes: "+totalVotes;
            bar[i].style.width=barArray[i]+'%';
        }
}
for(let i=0;i<voteBtn.length;i++) {
    voteBtn[i].addEventListener("click",function() {

        totalVotes++;
        voteCount[i].innerHTML=parseInt(voteCount[i].innerHTML)+1;
        voteCountArray[i]=parseInt(voteCount[i].innerHTML)+1;
       main(i);
    });
}
function main(k){
    for(let i=0;i<voteBtn.length;i++){
        percentageCount[i].innerHTML=(voteCount[i].innerHTML/totalVotes*100).toFixed(2)+'%';
        percentageCountArray[i]=(voteCount[i].innerHTML/totalVotes*100).toFixed(2)+'%';
        votePercentage[i].innerHTML=percentageCount[i].innerHTML+' '+'('+voteCount[i].innerHTML+' Votes'+')';
        votePercentageArray[i]=votePercentageCount[i].innerHTML+' '+'('+voteCount[i].innerHTML+' Votes'+')';
        bar[i].style.width=percentageCount[i].innerHTML;
        barArray[i]=percentageCount[i].innerHTML;
        total.innerHTML="Total Votes: "+totalVotes;

        
    }
   
    localStorage.setItem('percentageCountString',JSON.stringify(percentageCountArray));
    localStorage.setItem('votePercentageString',JSON.stringify(votePercentageArray));
    localStorage.setItem('totalVotesString',totalVotes);
    localStorage.setItem('barString',JSON.stringify(barArray));
    localStorage.setItem('voteCountString',JSON.stringify(voteCountArray));
    
}*/