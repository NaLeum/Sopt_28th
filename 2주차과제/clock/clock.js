const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = '#00ffff';
ctx.lineWidth = 17;
ctx.shadowBlur= 15;
ctx.shadowColor = '#00ffff'

function degToRad(degree){
    const factor = Math.PI/180;
    return degree*factor;
}

function renderTime(){
    const now = new Date();
    const today = now.toDateString();
    const time = now.toLocaleTimeString();
    const hrs = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const mil = now.getMilliseconds();
    const smoothsec = sec+(mil/1000);
    const smoothmin = min+(smoothsec/60);

    //뒷배경
    //createRadialGradient 도형의 배경에 그라데이션 효과 지정
    gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
    gradient.addColorStop(0, "#03303a");
    gradient.addColorStop(1, "black");
    ctx.fillStyle = gradient;
    //ctx.fillStyle = 'rgba(00 ,00 , 00, 1)';
    // fillRect 색칠된 직사각형을 그림 (x,y,width,height)
    ctx.fillRect(0, 0, 500, 500);
    //Hours
    ctx.beginPath();
    //arc(x, y, radius, startAngle, endAngle, anticlockwise)
    ctx.arc(250,250,200, degToRad(270), degToRad((hrs*30)-90));
    ctx.stroke();
    //Minutes
    ctx.beginPath();
    ctx.arc(250,250,170, degToRad(270), degToRad((smoothmin*6)-90));
    ctx.stroke();
    //Seconds
    ctx.beginPath();
    ctx.arc(250,250,140, degToRad(270), degToRad((smoothsec*6)-90));
    ctx.stroke();
    //Date
    ctx.font = "25px Helvetica";
    ctx.fillStyle = 'rgba(00, 255, 255, 1)'
    ctx.fillText(today, 175, 250);
    //Time
    ctx.font = "25px Helvetica Bold";
    ctx.fillStyle = 'rgba(00, 255, 255, 1)';
    ctx.fillText(time+":"+mil, 175, 280);

}
setInterval(renderTime, 40);