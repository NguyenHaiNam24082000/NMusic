const heading= document.querySelector("h1");
window.addEventListener("keydown",function(e)
{
    // const audio= document.querySelector("audio") 
    console.log(e);
    if(e.keyCode>=65&&e.keyCode<=90)
    {
        heading.innerHTML=e.key;
        heading.dataset.text=e.key;
        setTimeout(function()
        {
            heading.innerHTML="Press Key";
            heading.dataset.text="Press Key";
        },2000)
    }
});