const heading= document.querySelector("h1");
window.addEventListener("keydown",function(e)
{
    if(e.keyCode!=32)
    {
        heading.innerHTML=e.key;
        heading.dataset.text=e.key;
    }
    else
    {
        heading.innerHTML="Space";
        heading.dataset.text="Space";
    }
    setTimeout(function()
    {
        heading.innerHTML="Press";
        heading.dataset.text="Press";
    },1500);
});
let mouseLeftCurrent=0;
let mouseWheelCurrent=0;
let mouseRightCurrent=0;
window.addEventListener("mousedown",function(e)
{
    switch(e.button)
    {
        case 0:
            mouseLeftCurrent++;
            heading.innerHTML="Left "+mouseLeftCurrent;
            heading.dataset.text="Left "+mouseLeftCurrent;
            break;
        case 1:
            mouseWheelCurrent++;
            heading.innerHTML="Wheel "+mouseWheelCurrent;
            heading.dataset.text="Wheel "+mouseWheelCurrent;
            break;
        case 2:
            mouseRightCurrent++;
            heading.innerHTML="Right "+mouseRightCurrent;
            heading.dataset.text="Right "+mouseRightCurrent;
            break;
    }
    setTimeout(function()
    {
        mouseLeftCurrent=0;
        mouseWheelCurrent=0;
        mouseRightCurrent=0;
        heading.innerHTML="Press";
        heading.dataset.text="Press";
    },7500);
});