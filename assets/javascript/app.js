/*
declare array with all the right answers.
set a timer that is updated every second and displayed to the html page.
store the answers.
once time up compare the users answers to the actual answers.
show the number of right and wrong answers.

if any questions are left unanswered they're incorrect.
*/

var answers = [
    "true", 
    "true", 
    "false", 
    "false", 
    "false", 
    "false", 
    "true", 
    "true", 
    "true", 
    "false"
]; 


var Input = [
];

var initTime = 45;
var intervalID;
var correct = 0;
var wrong = 0;

function stop(){
    clearInterval(intervalID);
    $("#questions").hide();
    $("#endpage").show();
    for(i=1;i<11;i++){
        var question = "q"+i.toString();
        var temp = document.forms['quiz'][question].value;
        Input.push(temp);
    }

    console.log(Input);
    compare();
}

function decrement(){
    initTime --;
    $("#time").text("Time remaining: 00:"+initTime +" seconds");
    if(initTime==0){
        stop();
    }
}

function time(){
    clearInterval(intervalID);
    intervalID = setInterval(decrement,1000);
}



$(document).ready(function(){
 $("#questions").hide();
 $("#endpage").hide();
    $("#start").click(function(){
        $("#questions").show();
        $("#start").hide();
        time();
    });
});


/*$("input").on("click",function(){
    var User_answer = $("this:checked").value;
    Input.push(User_answer);
});
*/

$("#submit").on("click", function(){
   stop();
});

function compare(){
    for(i=0; i<answers.length;i++){
        if(answers[i]== Input[i]){
            correct ++;
        }
        else{
            wrong ++;
        }
    }
    $("#correct").append(correct);
    $("#incorrect").append(wrong);
}