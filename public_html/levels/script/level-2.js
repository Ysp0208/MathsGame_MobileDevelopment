//Step 1: I need to declare variables to store data from the HTML document.
var score=0;
var question_number=0;
const audio=document.getElementById("my-audio"); //one value for the audio
const audio2=document.getElementById("my-audio2"); //one value for the audio
let correct_answer_button=0;

// A timer that is only implemented in level 1 and 2 not level 0. 
//Function, maybe some JavaScript time functions and then show the time.

var timeleft=10; //declaring variable for timer value
var downloadTimer=setInterval(function() 
{
    if (timeleft <=0)
    {
       // once timer ends puuting the message of finish game and disabled the next question button 
       clearInterval(downloadTimer);
       document.getElementById(`time`).innerHTML="Sorry! Time up...";
       document.getElementById(`next-question`).hidden=true;
       document.getElementById(`finish`).hidden=false;
       
    }
    else
    {
        document.getElementById(`time`).innerHTML = timeleft + " seconds remaining";
    }
    timeleft -=1;//will decrease by 1 each second( 9, 8, etc)
    
},1000);//timer goes down by one second


//pseudo code
//Step 2: Create all the structures.

//Step 3: startTime - to get the elements: the options 1, 2,3 and 4
//activate the question numbers.
function startTime()
{
    //question number and the last question is 10.
    question_number=question_number+1;
    let title=document.getElementById("title");
    title.innerHTML="Level 2: Hard Difficulty Question "+question_number;
    document.getElementById("option1").disabled=false;
    document.getElementById("option2").disabled=false;
    document.getElementById("option3").disabled=false;
    document.getElementById("option4").disabled=false;
    
    //call a function to activate the mechanics of generating a maths question.
    start_math_question();
    // A TIMER!!!! does not exist in this level but will be implemented in level 1 and 2
    //Function, maybe some JavaScript time functions and then show the time. 
    //????
}



//create modular sections or functions for better maintanence.
// Step start maths question - function
function start_math_question()
{
    //generate a number that is used to generate an operator(-, /, +, *).
    //Random 4 values because they are 4 operators.
    
    var operator = Math.ceil(Math.random()*4);
    
    //the first number will be generated from 1-12 - random
    var number1 = Math.ceil(Math.random()*12);
    document.getElementById('num1').innerHTML=number1;
    //the second number will be generated from 1-12 - random
    var number2 = Math.ceil(Math.random()*12);
    document.getElementById('num2').innerHTML=number2;
    
  // implemneted switch for each mathematcial operation via individual js function  
  
   //Select the operatoe is 1/2/3/4
    //(1=Sum, 2=Subtract, 3=multiplication, 4=division)
  
  switch (operator) {
    case 1:
        //alert(operator);
        DoAddition(number1,number2);
        break;
    case 2:
       // alert(operator);
        DoSubtraction(number1,number2);
        break;
    case 3:
        //alert(operator);
        DoMultiplication(number1,number2);
        break;
    case 4:
        DoDivision(number1,number2);
        break;
        
    //default: 
        //alert("Sorry, please try again.");
         //break;
  
    }
}
function DoAddition(num1, num2)
{
    //first calculate the correct answer
        //alert("you are in add function")
        let correct_answer=num1+num2;
        //correct_answer = correct_answer.toFixed(2);
        document.getElementById('operator').innerHTML="+";
        
        //generate dummy answers and show them on screen - 4 variables wrong_answers 1, 2, 3, 4
        
        let wrong_answer1= Math.ceil(Math.random() * 12) + Math.ceil(Math.random() * 12); 
        let wrong_answer2= Math.ceil(Math.random() * 12) + Math.ceil(Math.random() * 12);
        let wrong_answer3= Math.ceil(Math.random() * 12) + Math.ceil(Math.random() * 12);
        let wrong_answer4= Math.ceil(Math.random() * 12) + Math.ceil(Math.random() * 12);
        
        //send the number back ans show them
        
        document.getElementById("option1").innerHTML= wrong_answer1;
        document.getElementById("option2").innerHTML= wrong_answer2;
        document.getElementById("option3").innerHTML= wrong_answer3;
        document.getElementById("option4").innerHTML= wrong_answer4;
        
        // merge the correct answer into one button from 4 possible options
        correct_answer_button=Math.ceil(Math.random()*4);
        answer_option_id= "option" + correct_answer_button;
        document.getElementById(answer_option_id).innerHTML=correct_answer;
        
        //prevent the wrong answer being the correct answer
        
        if(wrong_answer1 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer2 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer3 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer4 === correct_answer)
        {
            start_math_question();
        }
}

// function to do the substrction of given number
function DoSubtraction(num1, num2)
{
     //first calculate the correct answer
     
        //alert("you are in in substract function");
        let correct_answer=num1-num2;
        //correct_answer = correct_answer1.toFixed(2);
        document.getElementById('operator').innerHTML="-";
        
        //prevent negative numbers: if the answer is negative or zero
        if(correct_answer<=0)
        {
            start_math_question();
        }
       
        if(correct_answer>=1)
        {
        //generate dummy answers and show them on screen - 4 variables wrong_answers 1, 2, 3, 4
        let wrong_answer1= Math.ceil(Math.random() * 11); 
        let wrong_answer2= Math.ceil(Math.random() * 11);
        let wrong_answer3= Math.ceil(Math.random() * 11);
        let wrong_answer4= Math.ceil(Math.random() * 11);
        
        //send the number back ans show them
        
        document.getElementById("option1").innerHTML= wrong_answer1;
        document.getElementById("option2").innerHTML= wrong_answer2;
        document.getElementById("option3").innerHTML= wrong_answer3;
        document.getElementById("option4").innerHTML= wrong_answer4;
        
        // merge the correct answer into one button from 4 possible options
        correct_answer_button=Math.ceil(Math.random()*4);
        answer_option_id= "option" + correct_answer_button;
        document.getElementById(answer_option_id).innerHTML=correct_answer;
        
        //prevent the wrong answer being the correct answer
        
        if(wrong_answer1 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer2 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer3 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer4 === correct_answer)
        {
            start_math_question();
        }
    }
    
}
// Function to do the mulitplication of the given table 
function DoMultiplication(number1, number2)
{
     //first calculate the correct answer
     
        //alert("you are in in Multiplication function");
        let correct_answer=number1*number2;
        //correct_answer = correct_answer1.toFixed(2);
        document.getElementById('operator').innerHTML="*";
        
        //generate dummy answers and show them on screen - 4 variables wrong_answers 1, 2, 3, 4
        
        let wrong_answer1= Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12); 
        let wrong_answer2= Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12);
        let wrong_answer3= Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12);
        let wrong_answer4= Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12);
        
        //send the number back ans show them
        
        document.getElementById("option1").innerHTML= wrong_answer1;
        document.getElementById("option2").innerHTML= wrong_answer2;
        document.getElementById("option3").innerHTML= wrong_answer3;
        document.getElementById("option4").innerHTML= wrong_answer4;
        
        // merge the correct answer into one button from 4 possible options
        correct_answer_button=Math.ceil(Math.random()*4);
        answer_option_id= "option" + correct_answer_button;
        document.getElementById(answer_option_id).innerHTML=correct_answer;
        
        //prevent the wrong answer being the correct answer
        
        if(wrong_answer1 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer2 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer3 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer4 === correct_answer)
        {
            start_math_question();
        }
    
}

function DoDivision (number1,number2)
{
    //first calculate the correct answer
        //alert("you are in in Division function");
        let correct_answer=number1/number2;
        //correct_answer = correct_answer1.toFixed(2);
        document.getElementById('operator').innerHTML="/";
        
        //generate dummy answers and show them on screen - 4 variables wrong_answers 1, 2, 3, 4
        
        let wrong_answer1= Math.ceil(Math.random() * 12) / Math.ceil(Math.random() * 12); 
        let wrong_answer2= Math.ceil(Math.random() * 12) / Math.ceil(Math.random() * 12);
        let wrong_answer3= Math.ceil(Math.random() * 12) / Math.ceil(Math.random() * 12);
        let wrong_answer4= Math.ceil(Math.random() * 12) / Math.ceil(Math.random() * 12);
        
        //send the number back ans show them
        
        document.getElementById("option1").innerHTML= wrong_answer1.toFixed(2);
        document.getElementById("option2").innerHTML= wrong_answer2.toFixed(2);
        document.getElementById("option3").innerHTML= wrong_answer3.toFixed(2);
        document.getElementById("option4").innerHTML= wrong_answer4.toFixed(2);
        
        // merge the correct answer into one button from 4 possible options
        correct_answer_button=Math.ceil(Math.random()*4);
        answer_option_id= "option" + correct_answer_button;
        document.getElementById(answer_option_id).innerHTML=correct_answer.toFixed(2);
        
        //prevent the wrong answer being the correct answer
        
        if(wrong_answer1 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer2 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer3 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer4 === correct_answer)
        {
            start_math_question();
        }
    } 
    



//Step 4: Create a function when the user selects an answer and the compare answers.
//compare_answer() - function.
function compare_answer(button_id) //parameter
{
    //1 - the user choose the correct answer, time stop and is given 100 points
    //2 - play an audio (applause or boos) when a user gets a right or wrong answer
    
    //1- compare the buttons selections
    if(correct_answer_button === button_id)
    {
        score=score+100;
        document.getElementById('score').innerHTML="Score: "+score;
        
    //2- play the audio
        audio.play();
    
    //2.1- disable options and show the next button
        document.getElementById("option1").disabled=false;
        document.getElementById("option2").disabled=false;
        document.getElementById("option3").disabled=false;
        document.getElementById("option4").disabled=false;
        document.getElementById('option'+button_id).disabled=true;
        document.getElementById('next-question').hidden=false;
        //when the game has 10 questions - hide the next question button and show finish button.
        if(question_number === 10)
        {
            document.getElementById('next-question').hidden=true;
            document.getElementById('finish').hidden=false;
        }
    }
    //3- the user chose the wrong the answer, negative score or no points - 0, time stop? - level 1&2
        else
        {
            score=score-50;
            document.getElementById('score').innerHTML="Score: "+score;
            
        //3.1- play the boo audio when the user clicks thr wrong answer
            audio2.play();
            
        //disable options and show the next button
            document.getElementById("option1").disabled=false;
            document.getElementById("option2").disabled=false;
            document.getElementById("option3").disabled=false;
            document.getElementById("option4").disabled=false;
            document.getElementById('option'+button_id).disabled=true;
            document.getElementById('next-question').hidden=false;
        if(question_number === 10)
        {
            document.getElementById('next-question').hidden=true;
            document.getElementById('finish').hidden=false;
        }
        }
}
