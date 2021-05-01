var hr, mn, sc;
var hrAngle, scAngle, mnAngle;



function setup() {
  createCanvas(800,800);
  angleMode(DEGREES)
  
}

function draw() {
  background(000); 

  translate(390,325)
  hr = hour()
  mn = minute()
  sc = second()


  if(sc>=10){
     if(mn<10){
    text(hr+":0"+mn+":"+sc,-30,180)
    document.title = hr+":0"+mn+":"+sc
     }
    else if(mn>10){
     text(hr+":"+mn+":"+sc,-30,180)
    document.title = hr+":"+mn+":"+sc
    }
      
  }
  else if(sc<10){
         if(mn<10){
    text(hr+":0"+mn+":0"+sc,-30,180)
    document.title = hr+":0"+mn+":"+sc
     }
    else if(mn>10){
     text(hr+":"+mn+":0"+sc,-30,180)
    document.title = hr+":"+mn+":"+sc
    }
    
  }
  
  
  
  hrAngle = map(hr,0,60,0,360)
  mnAngle = map(mn,0,60,0,360)
  scAngle = map(sc,0,60,0,360)


  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(4);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0,255,0)
  strokeWeight(5);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(6)
  line(0,0,50,0)
  pop();

  noFill();

  stroke(255,0,255);

  point(0,0);

  strokeWeight(10);
 

  stroke(255,0,0); 

  arc(0,0,300,300,0,scAngle);

  stroke(0,255,0); 

  arc(0,0,280,280,0,mnAngle);
  
  stroke(0,0,255); 

  arc(0,0,260,260,0,hrAngle);






  drawSprites();
}
