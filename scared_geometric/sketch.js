var t;
var theta;
var radius = 137;
var shape = "t";
var a,b,num,maxFrameCount;
var btn = [];
var word = ["Peace","Collaboration", "Creativity", "Consciousness", "Unity","Love"];
var s = 100;
var particles;
var button;

var x1 = 0, y1 = 0, x2 = 90, y2 = 20, x3 = 60, y3 = 90, x4 = 0, y4 = 130;
var colorI = 0, steps = 10, counter=0;

function setup() {


    createCanvas(800, 800);
    noFill();
    strokeWeight(2);
    strokeJoin(ROUND);
    strokeCap(ROUND);

    bezierDetail(50);

    particles = new Array();
    for (var i = 720; i > -720; i--) {
        particles.push(new Particle(-50, i));
    }

    for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.otherP = particles[Math.floor(random(particles.length-1))];
    }


    for(var i = 0; i < word.length; i++){
        var b = createButton(word[i]);
        b.position(50+i*120, 10);
        b.mouseClicked(changePattern);
        b.size(100);
        textAlign(CENTER);
        textSize(50);
        btn.push(b);
    }

}

function changePattern(l){
	console.log(l);
	if(l.toElement.textContent == word[0]){
		shape = "c";
	}
	if(l.toElement.textContent == word[1]){
		shape = "t";
	}
	if(l.toElement.textContent == word[2]){
		shape = "r";
	}
	if(l.toElement.textContent == word[3]){
		shape = "p";
	}
	if(l.toElement.textContent == word[4]){
		shape = "d";
	}
    if(l.toElement.textContent == word[5]){
		shape = "h";
	}
}

function draw() {
    background(0,0,0);

    translate(width/2, height/2); 
    noFill();

    t = frameCount/maxFrameCount;
    theta = TWO_PI*t;

    if(shape == 't'){
        numb = 2;
        maxFrameCount = 200;
        for (var i = 0; i < 360; i += 20) {
          var angle = radians(i);
          var x =  (cos(angle) * radius);
          var y =  (sin(angle) * radius);

          this.tri(x, y, HALF_PI+(radians(i)));
        }
    }

    else if(shape == 'c'){
        numb = 4;
        maxFrameCount = 150;
        a = 31;
        b = 7;

        for (var x= 0; x <= 350; x += 15) {
            for (var i = 0; i < numb-1; i++) {
                var rot = TWO_PI/numb*i;

                var offSet = (i*b)+(x*a);   
                var sz1 = map(cos(-(theta)+offSet), 0, 1, 90, 0);
                var sz2 = map(sin(-(theta)+offSet), 0, 1, 0, 90);

                stroke(160-(x/3), 180, 105+(x/3));
                rotate(rot);
                arc(0, 0, x, x, radians(sz2), radians(sz1));
            }
        }
    }
    else if(shape == 'r'){
         numb = 3;
         maxFrameCount = 200;
         for (var i = 0; i < 360; i += 20) {
            var angle = radians(i);
            var x =  (cos(angle) * radius);
            var y =  (sin(angle) * radius);

            this.rec(x, y, HALF_PI+(radians(i)));
        }
    }
    else if(shape == 'p'){
        numb = 2;
        maxFrameCount = 150;
        a = 100;
        b = 3;

        for (var x= 0; x <= 350; x += 30) {
            for (var i = 0; i < numb-1; i++) {
                var rot = TWO_PI/numb*i;

                var offSet = (i*b)+(x*a);   
                var sz1 = map(cos(-(theta)+offSet), 0, 1, 90, 0);
                var sz2 = map(sin(-(theta)+offSet), 0, 1, 0, 90);

                stroke(160-(x/3), 129, 105+(x/3));
                rotate(rot);
                arc(0, 0, x, x, radians(sz2), radians(sz1));
            }
        }
    }

    else if (shape == 'd'){
        translate(width/4-200, height/4-220);
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            p.draw();
        }
    }
    else if (shape == 'h'){
        push();
        scale(1.3);

        for(var j = 0; j < 52; j +=1){
            push();
            rotate(j);

            if(colorI<= 10){
                colorI++;
            }
            else{
                colorI= 0;
            }

            if(counter <=10000){
                counter ++;
            }
            else{
                counter = 0;
            }

            var t = colorI/ steps;
            var x = bezierPoint(x1, x2, x3, x4, t);
            var y = bezierPoint(y1, y2, y3, y4, t);

            if(colorI< 5){
                stroke(100+colorI*20, 21, 12+colorI*50);
            }
            else{
                stroke(23+colorI*20, 121, 2+colorI*50);
            }

            if(counter > 5000){
                stroke(23+colorI*20, 231, 2+colorI*50);
            }

            noFill();
            bezier(0,0,90,20, 60,90,0,130);
            bezier(0,0,-90,20,-60,90,0,130);
            pop();
        }
        pop();
    }
}

function rec(xpos, ypos, a) {
    push();
    translate(xpos, ypos);
    rotate(a);

    for (var x= -50; x <= 56; x += 100) {
        for (var y= -50; y <= 56; y += 100) {
              for (var i=0; i<=numb-1; i++) {
                var offSet = (TWO_PI/numb*i); 
                var offSet2 = (TWO_PI/numb*i)*2; 
                var pos1 = map(sin(-theta+offSet), -1, 1, -75, 75);
                var pos2 = map(cos(-theta+offSet), -1, 1, 50, -50);
                var pos3 = map(sin(-theta+offSet2), -1, 1, -50, 50);
                var pos4 = map(sin(-theta+offSet), -1, 1, 100, -50);

                /* modulo for two colors */
                if (i % 3 == 0) {
                  stroke(209, 200, 109);
                } else if (i % 3 == 1){
                  stroke(228, 134, 109);
                }
                else {
                  stroke(143, 171, 212);
                }

                rect(pos1, pos4, pos2, pos3);
                }
        }
    }

    pop();
	
}

function tri(xpos, ypos, a) {
    push();
    translate(xpos, ypos);
    rotate(a);
  
    for (var x= -50; x <= 56; x += 100) {
        for (var y= -50; y <= 56; y += 100) {
            for (var i=0; i<=numb-1; i++) {
                var offSet = (TWO_PI/numb*i); 
                var offSet2 = (TWO_PI/numb*i)*2; 
                var pos1 = map(sin(-theta+offSet), -1, 1, -75, 75);
                var pos2 = map(cos(-theta+offSet), -1, 1, 50, -50);
                var pos3 = map(sin(-theta+offSet2), -1, 1, -50, 50);
                var pos4 = map(sin(-theta+offSet), -1, 1, 100, -50);



                if(abs(sin(-theta+offSet))<0.5 ){
                    if (i % 2 == 0) {
                      stroke(66, 134, 244);
                    } else {
                      stroke(255, 231, 165);
                    }
                }
                else{
                    if (i % 2 == 0) {
                      stroke(162, 242, 216);
                    } else {
                      stroke(161, 148, 232);
                    }
                }
                triangle(0, pos4, pos2, pos3, pos1, pos2);
              }
        }
        }

    pop();
}


function Particle(y, index){
    this.y = y;
    this.index = index;
    this.xpos = 0;
    this.ypos = 0;
    this.otherP;
}

Particle.prototype.draw = function(){
    this.angle = cos(radians(this.index*2-frameCount*3))*50;
    this.xpos = sin(radians(this.index))*(s+this.angle*3);
    this.ypos = cos(radians(this.index))*(s-this.angle*3);
    if(Math.pow((this.xpos - this.otherP.xpos),2) + Math.pow((this.ypos - this.otherP.ypos),2) < 10000){
        stroke(240,75);
        line(this.xpos, this.ypos, this.otherP.xpos, this.otherP.ypos);
    }
}

