/*

12. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.

also do it with arrow function
*/

class VolumeCylinder{
  constructor(radius, height){
    this.radius = radius;
    this.height = height;
  }

  volume = () => Number((Math.PI * this.radius * 2 * this.height).toFixed(4));
}

const calculateVolume = new VolumeCylinder(4,5);
console.log(calculateVolume.volume());

export default VolumeCylinder
/*
An alternatif solution to this problem using only functions is as follows 

const volumeCylinder = (radius, height) => {
  const volume = Math.PI * radius * 2 * height;

  return Number(volume.toFixed(4));
}

console.log(volumeCylinder(2, 3));
*/
