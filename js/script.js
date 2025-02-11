function countdown(){
let current=new Date().getTime()
let deadline=new Date("2026-01-01T00:00:00").getTime()

let now=deadline-current

let s=Math.floor(now/1000)
let m=Math.floor(s/60)
let h=Math.floor(m/60)
let d=Math.floor(h/24)

s%=60
m%=60
h%=24

s=(s<10)?"0"+s:s
m=(m<10)?"0"+m:m
h=(h<10)?"0"+h:h
d=(d<10)?"0"+d:d

document.querySelector(".second").innerHTML=s
document.querySelector(".minute").innerHTML=m
document.querySelector(".hour").innerHTML=h
document.querySelector(".day").innerHTML=d
}

setInterval(countdown,1000)
