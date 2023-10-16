
const mark = {
    fullName : "Mark Miller",
    mass : 78,
    height : 1.69,

    calcBMI : function(){
        heightDeno = this.height * this.height;
        BMI = this.mass / heightDeno;
        return BMI;
    }
}
const john = {
    fullName : "John Smith",
    mass : 92,
    height: 1.95,

    calcBMI : function(){
        heightDeno = this.height * this.height;
        BMI = this.mass / heightDeno;
        return BMI;
    }
}
//assign BMI to a property
mark.BMI = mark.calcBMI();
john.BMI = john.calcBMI();

if (mark.BMI > john.BMI){
    console.log(`Mark Miller's BMI(${mark.BMI})
    is higher than John Smith's BMI(${john.BMI}).`);
}
else{
    console.log(`John Smith's BMI (${john.BMI}) is higher than Mark Miller's(${mark.BMI}).`);
}
