class paper
{
    constructor(x,y,r)
{
    var options = {
    isStatic:false,
    'restitution':0.3,
    'friction':0,
    'density':1.2
   
}
    this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
        this.image=loadImage("paper.js");
}

display()
{
var Paperpos = this.body.position;	
push()
translate(Paperpos.x, Paperpos.y);
rectMode(CENTER)
ellipseMode(CENTER);
    ellipse(0,0,this.r,this.r);
	pop()
}


}