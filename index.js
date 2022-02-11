var ticks = 1,ticker;
setTimeout(function() { ticker = setInterval(changeTick,1600);},500);

function changeTick()
{
 document.querySelector('.eye span').setAttribute('data-text', --ticks);
 if (0 === ticks) clearInterval(ticker);
}
