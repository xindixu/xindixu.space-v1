
var archDoors,head,body;             
var light_col;
var main;
function setup(){
	
  createCanvas(850,650).parent('tower');
  background(188,191,195);
  main = color(190,85,0);
	 light_col= {0: [0,0,0], 
				 1: [0,0,0],
				 2: [0,0,0],
				 3: [0,0,0],
				 4: [0,0,0],
				 5: [0,0,0],
				 6: [0,0,0],
				 7: [0,0,0], 
				 8: [0,0,0],
				 9: [0,0,0],
				 10: [0,0,0],
				 11: [0,0,0],
				 12: [0,0,0]};
  // create arch doors
  archDoors = createGraphics(0,0);
  noStroke();
  archDoors.arc(18,15,36,36,-PI,PI);
  archDoors.rect(0,15,36,35);
  archDoors.fill(color(51,63,72));
	
  //head = createGraphics(ARC,18,15,36,36,-PI,PI,OPEN);
  //head.setFill(color(51,63,72));
  //body = createGraphics(RECT,0,15,36,35);
  //body.setFill(color(51,63,72));
  
//  archDoors.addChild(head);
//  archDoors.addChild(body);
     
  // tower
  stroke(0,0,0);
  rectMode(CORNERS);
  strokeWeight(5);
  fill(color(208,204,191));
  rect(360,130,490,365);
  rect(360,130,490,160);
  
  // grey collomns
  fill(color(119,126,132));
  for(var i = 0; i < 3; i ++){
    rect(386+30*i,160,402+30*i,365);
  }

  // dots
  strokeWeight(6);
  fill(color(208,204,191));
  for(var l = 0; l < 3; l ++){
    point(395+30*l,144);
  }
  // upper tower
  strokeWeight(5);
  rect(380,95,470,130);
  rect(400,40,450,95);
  strokeWeight(5);
  for(var m = 0; m < 3; m ++){
    line(410+15*m,40,410+15*m,95);
  }
  rect(395,30,455,40);
  rect(405,20,445,30);
  
  // clock
  fill(color(236,234,231));
  ellipse(425,100,27,27);
  strokeWeight(4);
  line(400,95,400,130);
  line(450,95,450,130);
  
  // house in the back
  fill(color(208,204,191));
  rect(110,420,740,500);
  fill(color(168,117,83));
  rect(110,420,740,430);
  fill(color(119,126,132));
  rect(135,440,150,500);
  rect(700,440,715,500);
  
  
  // house 
  fill(color(208,204,191));
  rect(195,395,655,605);
  // vertical 
  line(235,395,235,535);
  line(615,395,615,535);
  // horizontal lines - pattern
  strokeWeight(3);
  for(var n = 0; n < 9; n ++){
    line(195,542+8*n,655,542+8*n);
  }
  // vertial lines
  for(var o = 0; o < 4; o ++){
    rect(338+54*o,432,346+54*o,535);
  }
  rect(280,395,290,535);
  rect(570,395,560,535);
  
  // doors
  fill(color(119,126,132));
  for(var p = 0; p < 5; p ++){
    rect(305+55*p,410,320+55*p,450);
    rect(305+55*p,480,320+55*p,535);
  }
  for(var q = 0; q < 2; q ++){
    rect(250+330*q,423,265+330*q,450);
    rect(250+330*q,480,265+330*q,535);
  }
  
  fill(color(208,204,191));
  for(var r = 0; r < 2; r++){
    rect(360+110*r,470,375+110*r,475);
  }
  rect(235,450,615,465);
  line(235,432,615,432);
  line(400,475,445,475);
  ellipse(423,462,16,22);
  
  strokeWeight(5);
  fill(color(168,117,83));
  quad(280,365,570,365,660,395,190,395);
  line(235,450,615,450);
  // horizontal
  line(195,535,655,535);
  // small windows on the roof
  for(var f = 0; f < 2; f++){
    strokeWeight(2);
    fill(color(168,117,83));
    triangle(304+220*f,380,326+220*f,380,315+220*f,375);
    fill(color(236,234,231));
    rect(306+220*f,380,324+220*f,388);
  }
  
  // arch doors & triangle pattern
  strokeWeight(2);
  fill(color(208,204,191));
  for(var s = 0; s < 7; s ++){
    triangle(305+55*(s-1),535,320+55*(s-1),535,312.5+55*(s-1),552);
    image(archDoors,240+55*s,555); 
  }
  
  // houses in the front  *620
  for(var a = 0; a < 2; a ++){
    strokeWeight(5);
    fill(color(208,204,191));
    rect(15+620*a,450,215+620*a,640);
    fill(color(168,117,83));
    rect(15+620*a,450,215+620*a,460);
    
    
    strokeWeight(3);
    for(var t = 0; t < 9; t ++){
      line(15+620*a,570+8*t,215+620*a,570+8*t);
    }
    fill(color(119,126,132));
    for(var u = 0; u < 5; u ++){
      rect(40+32.5*u+620*a,475,60+32.5*u+620*a,563);
      rect(40+32.5*u+620*a,570,60+32.5*u+620*a,602);
      
    }
    line(40+620*a,475,190+620*a,475);
    for(var v = 0; v < 3; v ++){
      rect(72.5+32.5*v+620*a,630,92.5+32.5*v+620*a,640);
    }
    fill(color(208,204,191));
    strokeWeight(2);
    rect(100+620*a,600,130+620*a,610);
    for(var w = 0; w < 5; w ++){
      triangle(40+32.5*w+620*a,563,60+32.5*w+620*a,563,50+32.5*w+620*a,570);
    }
    strokeWeight(5);
    line(15+620*a,563,215+620*a,563);
    //vertical
    for(var s = 0; s < 2; s ++){
      line(40+150*s+620*a,460,40+150*s+620*a,563);
    }
  }  
  
  //light
  fill(color(208,204,191));
  noStroke();
  for(var j = 0; j < 3; j ++){
    for(var k = 0; k < 13; k ++){
      rect(390+30*j,172+15*k,400+30*j,178+15*k);
    }
  }
}



var l = false;

function draw(){
  stroke(color(58,70,79));
  rectMode(CORNERS);
  strokeWeight(5);
 

  if (keyIsPressed == true){ 
    fill(main);
    rect(360,130,490,365);
    rect(360,130,490,160);
    // dots
    strokeWeight(6);
    for(var l = 0; l < 3; l ++){
      point(395+30*l,144);
    }
    // upper tower
    strokeWeight(5);
    rect(380,95,470,130);
    rect(400,40,450,95);
    strokeWeight(5);
    for(var m = 0; m < 3; m ++){
      line(410+15*m,40,410+15*m,95);
    }
    rect(395,30,455,40);
    rect(405,20,445,30);
    
    // clock
    fill(color(236,234,231));
    ellipse(425,100,27,27);
    strokeWeight(4);
    line(400,95,400,130);
    line(450,95,450,130);  
    
    // grey collomns
    fill(color(58,70,79));
    for(var i = 0; i < 3; i ++){
      rect(386+30*i,160,402+30*i,365);
    }
    
      
  // control the light   
  //light
  noStroke();
  for(var j = 0; j < 3; j ++){
    for(var k = 0; k < 13; k ++){
      if(light_col[k][j] == 1){
        fill(255);
      }
      else{
        fill(main);
      }
      rect(390+30*j,172+15*k,400+30*j,178+15*k);
    }
  }
  
}
}

function mousePressed(){
  for(var i = 0; i < 9; i ++){
    fill(58,70,79,64);
    rect(0,0,850,650);
  }
}

var cnt = 0;

function keyPressed(){
	console.log(key);
	console.log(light_col);
	console.log(main);
  if (key == 'o' || key == 'O'){
	  // entirely orange
	  main = color(190,85,0);
	  l = true;
	}
  if (key == 'w' || key == 'W'){
	  // entirely white
	  main = color(255);
	}
	
  if ((key == 'r' || key == 'R') || (cnt > 6)){
  // reset the numbers
   cnt = 0;
   for(var i = 0; i < 13; i ++){
     for(var j = 0; j < 3; j ++){
       light_col[i][j] = 0;
     }
   }
  }
	
  if(key == '0'){
    for(var i = 0; i <= 2; i += 2){
      for(var j = 1+cnt; j <= 5+cnt; j ++){
        light_col[j][i] = 1;
      }
    }
    light_col[1+cnt][1] = 1;
    light_col[5+cnt][1] = 1;
    cnt += 6;
  }
	
  if(key == '1'){
    for(var i = 1+cnt; i <= 5+cnt; i ++){
      light_col[i][1] = 1;
    }
    light_col[2+cnt][0] = 1;
    light_col[5+cnt][0] = 1;
    light_col[5+cnt][2] = 1;
    cnt += 6;
  }
  
  if(key == '2'){
    for(var i = 1+cnt; i <= 5+cnt; i +=2){
      for(var j = 0; j <= 2; j ++){
        light_col[i][j] = 1; 
      }
    }
    light_col[2+cnt][2] = 1;
    light_col[4+cnt][0] = 1;
    cnt += 6;
  }
  
  if(key == '3'){
    for(var i = 1+cnt; i <= 5+cnt; i +=2){
      for(var j = 0; j <= 2; j ++){
        light_col[i][j] = 1; 
      }
    }
    light_col[2+cnt][2] = 1;
    light_col[4+cnt][2] = 1;
    cnt += 6;
  }
  
  if(key == '4'){
    for(var i = 1+cnt; i <= 5+ cnt; i ++){
      light_col[i][2] = 1;
    }
    for(var j = 1+cnt; j <= 3+cnt; j ++){
      light_col[j][0] = 1;
    }
    light_col[3+cnt][1] = 1;
    cnt = 6;
  }
  
  if(key == '5'){
    for(var i = 1+cnt; i <= 5+cnt; i +=2){
      for(var j = 0; j <= 2; j ++){
        light_col[i][j] = 1; 
      }
    }
    light_col[2+cnt][0] = 1;
    light_col[4+cnt][2] = 1;
    cnt += 6;
  }
  
  if(key == '6'){
    light_col[1+cnt][2] = 1;
    for(var i = 1+cnt; i <= 5+cnt; i ++){
      light_col[i][0] = 1;
    }
    for(var i = 3+cnt; i <= 5+cnt; i ++){
      light_col[i][2] = 1;
    }
    for(var i = 1+cnt; i <= 5+cnt; i += 2){
      light_col[i][1] = 1;
    }
    cnt += 6;
  }
  
  if(key == '7'){
    for(var i = 0; i <= 2; i ++){
      light_col[1+cnt][i] = 1;  
    }
    for(var j = 3+cnt; j <= 5+cnt; j++){
      light_col[j][1] = 1;
    }
    light_col[2+cnt][2] = 1;
    cnt += 6;
  }
	
  if(key == '8'){
    for(var i = 0; i <= 2; i ++){
      for(var j = 1+cnt; j <= 5+cnt; j += 2){
        light_col[j][i] = 1;
      }
    }
    for(var k = 2+cnt; k <=4+cnt; k += 2){
      light_col[k][0] = 1;
      light_col[k][2] = 1;
    }
    cnt += 6;
  }
	
  if(key == '9'){
    for(var i = 0; i <= 2; i ++){
      for(var j = 1+cnt; j <= 5+cnt; j += 2){
        light_col[j][i] = 1;
      }
    }
	  
    for(var k = 2+cnt; k <=4+cnt; k += 2){
      light_col[k][0] = 1;
      light_col[k][2] = 1;
    }
    light_col[4+cnt][0] = 0;
    cnt += 6;
  }
}