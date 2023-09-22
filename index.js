const d=document;

let hr=d.querySelector('#hr');
let mn=d.querySelector('#mn');
let sc=d.querySelector('#sc');

setInterval(()=>{
    let day=new Date();
    let hh=day.getHours()*30;
    let mm = day.getMinutes()*6;
    let ss = day.getSeconds()*6;
    
    hr.style.transfrom=`rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transfrom=`rotateZ(${mm}deg)`;
    sc.style.transfrom=`rotateZ(${ss}deg)`;
})
