// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

class CuboidMaker1 {
    constructor(attr){
    this.length1 = attr.length1;
    this.width = attr.width;
    this.height = attr.height;
    }
    volume(){
        return this.length1 * this.width * this.height;
    };
    surfaceArea(){
        return 2*(this.length1 * this.width + this.length1 * this.height + this.width * this.height); 

    };
}

// CuboidMaker.prototype.volume = function(){
// }

// CuboidMaker.prototype.surfaceArea = function() {  
// }

const Cub2 = new CuboidMaker1 ({
    length1: 4,
    width: 5,
    height: 5,
});

console.log(Cub2.volume()); 
console.log(Cub2.surfaceArea());


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface 
// area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and 
// surface area.

class ChCubeMaker extends CuboidMaker1 {
    constructor(attrCube){
        super(attrCube);
    }    
}

const CubCub = new ChCubeMaker({
    length1: 5,
    width: 5,
    height: 5,
})
console.log(CubCub.volume()); 
console.log(CubCub.surfaceArea());