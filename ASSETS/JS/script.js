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
    

}