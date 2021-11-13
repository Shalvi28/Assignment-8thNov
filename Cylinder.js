//Create an object and store the height and radius of a cylinder in it. Create a function to calculate the volume andsurface area of the cylinder

var cylinder= {
    r: 4,
    h: 7,
    volume: function(){
        return Math.PI * this.r * this.r * this.h;
    },
    surface: function(){
    return 2 * Math.PI * this.r * this.h;
    },
};
console.log(cylinder.volume());
console.log(cylinder.surface());
