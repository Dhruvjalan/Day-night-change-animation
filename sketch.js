const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var finaltime;
var engine, world;
var backgroundImg;
var gettime;
var bg ;

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


 if(backgroundImg)
 background(backgroundImg);
    Engine.update(engine);

   
    // write code to display time in correct format here
   
    if(gettime > 12){
        //  text.depth = 1
          text ("Time is : " + (gettime-12) + "PM",20,20);
              } else {text ("Time is: " + (gettime) + "AM",20,20)}
  


}

async function getBackgroundImg(){

    var time = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var format = await time.json();
    var datetime = format.datetime;
    gettime = datetime.slice(11,13);


    console.log(gettime); 

    
        if(gettime >6 && gettime < 8){
            bg = "sunrise1.png";
        } else if(gettime >8 && gettime < 10){
            bg = "sunrise2.png";
        } else if(gettime >10 && gettime < 12){
            bg = "sunrise3.png";
        } else if(gettime >12 && gettime < 14){
            bg = "sunrise4.png";
        } else if(gettime >14 && gettime < 16){
            bg = "sunrise5.png";
        } else if(gettime>16 && gettime < 18){
            bg = "sunrise6.png";
        } else if(gettime >18 && gettime < 20){
            bg = "sunset7.png";
        } else if(gettime >20 && gettime < 22){
            bg = "sunset8.png";
        } else if(gettime >22 && gettime < 24){
            bg = "sunset9.png";
        } else if(gettime < 2){
            bg = "sunset10.png";
        } else if(gettime >2 && gettime < 4){
            bg = "sunset11.png";
        } else if(gettime >4 && gettime < 6){
            bg = "sunset12.png";
        }      

        backgroundImg = loadImage(bg);

       
    }
