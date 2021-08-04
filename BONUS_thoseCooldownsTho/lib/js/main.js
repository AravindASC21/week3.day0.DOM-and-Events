document.addEventListener("keypress", keyPress);



var qPowerUp = document.getElementById("q");
var wPowerUp = document.getElementById("w");
var ePowerUp = document.getElementById("e");
var rPowerUp = document.getElementById("r");


function keyPress(event)
{
    
    if(event.key == "q")
    {
        if(qPowerUp.style.filter == "brightness(0.3)")
        {

        }
        else
        {
            dull(event);
            setTimeout(function(){qPowerUp.style.filter = "brightness(1)";}, 10000);
        }
    }
    else if(event.key == "w")
    {
        if(wPowerUp.style.filter == "brightness(0.3)")
        {

        }
        else
        {
            dull(event);
            setTimeout(function(){wPowerUp.style.filter = "brightness(1)";}, 10000);
        }
    }
    else if(event.key == "e")
    {
        if(ePowerUp.style.filter == "brightness(0.3)")
        {

        }
        else
        {
            dull(event);
            setTimeout(function(){ePowerUp.style.filter = "brightness(1)";}, 10000);
        }
    }
    else if(event.key == "r")
    {
        if(rPowerUp.style.filter == "brightness(0.3)")
        {

        }
        else
        {
            dull(event);
            setTimeout(function(){rPowerUp.style.filter = "brightness(1)";}, 10000);
        }
    }
}

function dull(event)
{
    if(event.key == "q")
    {
        qPowerUp.style.filter = "brightness(0.3)";
    }
    else if(event.key == "w")
    {
        wPowerUp.style.filter = "brightness(0.3)";
    }
    else if(event.key == "e")
    {
        ePowerUp.style.filter = "brightness(0.3)";
    }
    else if(event.key == "r")
    {
        rPowerUp.style.filter = "brightness(0.3)";
    }
}




