var x1 = 0, y1 = 0, x2 = 90, y2 = 20, x3 = 60, y3 = 90, x4 = 0, y4 = 130;
var colorI= 0, steps = 10, counter=0;
function setup() {
    createCanvas(800, 800);
    noFill();
    background(0);
    strokeWeight(2);
    strokeJoin(ROUND);
    strokeCap(ROUND);
    bezierDetail(50);
}

function draw() {

    push();
    translate(400,400);

    for(var j = 0; j < 52; j +=1){
        push();
        rotate(j);
    
        if(colorI<= 10){
            i++;
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
            stroke(100+i*20, 21, 12+i*50);
        }
        else{
            stroke(23+i*20, 121, 2+i*50);
        }
        
        if(counter > 5000){
            stroke(23+i*20, 121, 2+i*50);
        }

        noFill();
        bezier(0,0,90,20, 60,90,0,130);
        bezier(0,0,-90,20,-60,90,0,130);
        pop();
    }
    pop();

}