// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius
  }


get diameter(){ 
  return this.radius * 2
}
set diameter(diameter){
  this._diameter=diameter
}
get circumference(){
  return Math.PI*this.diameter
}
}