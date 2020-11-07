canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_images_array=["mars 1.jpg" , "mars.jpg" , "mars 3.jpg" , "mars 4.jpg"];

random_number=Math.floor(Math.random()*4);


roverX = 10;
roverY = 10;

roverWidth = 100;
roverHeight = 90;

backgroundImg = nasa_images_array[random_number];
roverImg = "rover.png";

function add() {

    backgroundImg_tag = new Image();
    backgroundImg_tag.onload = uploadBackground;
    backgroundImg_tag.src = backgroundImg;

    roverImg_tag = new Image();
    roverImg_tag.onload = uploadRover;
    roverImg_tag.src = roverImg;

}

function uploadBackground() {

    ctx.drawImage(backgroundImg_tag, 0, 0, canvas.width, canvas.height);

}

function uploadRover() {

    ctx.drawImage(roverImg_tag, roverX, roverY, roverWidth, roverHeight);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '38') {

        up();
        console.log("up");

    }

    if (keyPressed == '40') {

        down();
        console.log("down");

    }

    if (keyPressed == '37') {

        left();
        console.log("left");

    }

    if (keyPressed == '39') {

        right();
        console.log("right");

    }






}

function up() {

    if (roverY > 0) {

        roverY = roverY - 10;
        uploadBackground();
        uploadRover();


    }

}

function down() {

    if (roverY <= 500) {

        roverY = roverY + 10;
        uploadBackground();
        uploadRover();

    }

}

function left() {

    if (roverX > 0)

    {

        roverX = roverX - 10;
        uploadBackground();
        uploadRover();


    }

}

function right(){

if(roverX<=700)

{

roverX=roverX+10;
uploadBackground();
uploadRover();

}

}