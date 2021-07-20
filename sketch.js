const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png" ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
   
}

function draw(){
    if(backgroundImg){
 background(backgroundImg)
    }
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJson = await response.json()
   
    var hour = responseJson.datetime.slice(11,13)
   
    
  if(hour>=04 && hour<=86){
      bg = "sunrise1.png"
  }
  else if(hour>=06 && hour<=8){
          bg = "sunrise2.png"
      }

      
  

  else if(hour>=23 && hour==0){
        bg = "sunrise10.png"
    }

    else if(hour==0 && hour<=03){
        bg = "sunrise11.png"
    }

    else {
        bg = "sunrise12.png"
    }
    backgroundImg = loadImage(bg)
  

  
  
        

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
