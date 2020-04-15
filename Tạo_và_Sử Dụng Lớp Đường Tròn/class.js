let Circle = function (radius) {
    this.getRadius = function () {
        return radius;
    };
    this.getArea = function () {
        return Math.PI * radius * radius
    };
    this.getPerimeter = function () {
        return 2 * radius * Math.PI
    };
    this.getcanvas=function () {
        let circle=document.getElementById("myCanvas");
        let ctx = circle.getContext('2d');
        ctx.beginPath();
        ctx.arc(250,250,radius,0 ,2*Math.PI);
        ctx.stroke();
    }
};
let circle = new Circle(parseInt(prompt("Nhập bán Kính")));
let area = circle.getArea();
let radius = circle.getRadius();
let perimter = circle.getPerimeter();
let canvas=circle.getcanvas();
document.getElementById('result').innerHTML='area= ' + area + '<br>' +
    'radius = ' + radius + '<br>'+'preimter = ' + perimter;
