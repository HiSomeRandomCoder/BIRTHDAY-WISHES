var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
    block_image_object=Img;
    block_image_object.scaleToWidth=700;
    block_image_object.scaleToHeight=510;
    block_image_object.set({
        top:0,
        left:0
    });
canvas.add(block_image_object);
});
	
}

function playSound(){
	x.play();
}

function animation(){
fabric.Image.fromURL('fireworks.gif', function(Img){
    block_image_object1=Img;
    block_image_object1.scaleToWidth=350;
    block_image_object1.scaleToHeight=300;
    block_image_object1.set({
        top:200,
        left:300
    });
canvas.add(block_image_object1);
});
}
