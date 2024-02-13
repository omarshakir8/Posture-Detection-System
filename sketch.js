let Dog_img;



function setup(){
    createCanvas(800,500);
    Dog_img = loadImage('/Users/omarshakir/Desktop/Posenet/images/Dog.png')
}



function draw(){
    image(Dog_img, mouseX, mouseY, 100, 100, 100,100);
    
}