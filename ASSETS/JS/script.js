//Interactivity for the start button

const container = document.querySelector('.container');
const begin =document.querySelector('#mainButton');
begin.addEventListener('click', (e) => {
    e.preventDefault();
    begin.style.display = 'none';
    container.style.display = 'block';
  });




//Interactivity for the action once the submit button is pressed

function check(){
    var score=0;
    if (document.getElementById('right1').checked) 
    {
       score++;
    }
    if (document.getElementById('right2').checked) 
    {
       score ++;
    }
    if (document.getElementById('right3').checked) 
    {
        score ++;
    }
    if (document.getElementById('right4').checked) 
    {
        score ++;
    }
    if (document.getElementById('right5').checked) 
    {
        score ++;
    }
    document.write("Your score is:"+score);
     


    if (score >=4) {
        document.write("You have exellently passed");
        }else if(score>=3) {
        document.write("You have fairly passed");
        }else{
        document.write("You have scored poorly and need to retake the test");
        }
    


}



