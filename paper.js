class Paper {
    
    constructor(x,y,r) {
        
        var options = {
            
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
            
        }
        //loading the image into a new property
        this.image = loadImage("paper.png")
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);
        
    }
    
    display() {
        
        var paperpos = this.body.position;
        
        push();
        translate(paperpos.x, paperpos.y);
        //change rectMode to imageMode 
        imageMode(CENTER);
        strokeWeight(3);
        fill(255, 0, 255);
        //instead of using the ellipse , use to image command to display the image
        image(this.image,0, 0, this.r,this.r);
        pop();
        
    }
    
}
