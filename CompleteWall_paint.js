/*I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.
n is the number of square meters I can paint.
w and h are the widths and heights of a single wall in meters*/

var wallpaint = (n,width,height) => {
    Area = width * height;
   if(n >= Area)
   {
       var u = parseInt(n/Area);
   return ("The number of complete walls that I can paint is " +u)
   } 
   else
   {
    return ("You need to head to the shops to buy more blue paint")  
   }  
}
var n = 30;
console.log(wallpaint(n,4,5));




