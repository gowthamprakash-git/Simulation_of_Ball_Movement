
    var velocity=2;
    var positionX=0;
    var reverse=false;
    var ball=document.getElementById("reverseBall");
    var ball2=document.getElementById("moveableBall");
    function moveBall(){
        var xmin=0;
        var xmax=1000;

       if (reverse) {
    positionX = positionX - velocity;
    ball.style.left = positionX + "px";
     ball2.style.right = positionX + "px";
} else {
    positionX = positionX + velocity;
    ball.style.left = positionX + "px";
    ball2.style.right = positionX + "px";

}

if (positionX > xmax || positionX === xmin) {
    reverse = !reverse;
}
            }
            setInterval( moveBall,2);
