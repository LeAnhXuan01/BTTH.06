var size = 50
document.getElementById("notify-content").style.fontSize = `${size}%`
var notify=""
var check =""
function blink()
{
    document.getElementById("notify-content").style.color="black"
    setTimeout(function() { document.getElementById("notify-content").style.color="red"},250)
}
function clock()
{
let hours = new Date().getHours()
let minute = new Date().getMinutes()
let secound = new Date().getSeconds()
document.getElementById("hour1").src="img/0" + Math.floor(hours/10) + ".gif"
document.getElementById("hour2").src="img/0" + hours%10 + ".gif"
document.getElementById("minute1").src="img/0" + Math.floor(minute/10) + ".gif"
document.getElementById("minute2").src="img/0" + minute%10 + ".gif"
document.getElementById("secound1").src="img/0" + Math.floor(secound/10) + ".gif"
document.getElementById("secound2").src="img/0" + secound%10 + ".gif"
if(hours>=0 && hours<12)
{
    document.getElementById("notify-content").textContent="Chào buổi sáng"
    check = "Chào buổi sáng"
}
else if(hours>=12 && hours<17)
{
    document.getElementById("notify-content").textContent="Chào buổi chiều"
    check = "Chào buổi chiều"
}
else
{
    document.getElementById("notify-content").textContent="Chào buổi tối"
    check = "Chào buổi tối"
}
if(size < 100)
{
if (notify=="")
{
    notify=check
}
else if (notify!=check)
{
    size += 10
    document.getElementById("notify-content").style.fontSize = `${size}%`
    notify=check
}
}
}
setInterval("clock()",0)
setInterval("blink()",500)
