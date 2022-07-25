// Function Signature

function functionName(parametre1, parametre2){
    //Do smt
    return parametre1 * parametre2;
}
alert(functionName(2,3));
 function functionWithOutReturn(parametre1, parametre2){
    alert("This is function without return statement");
 }
 functionWithOutReturn(2,3,4);

 //Parameter Defaults
 function functionName2(x,y){
    if (y===undefined){
        y=0;
    }
 }
 functionName2(2,3);

 //The Arguments Object
 x = findMax(1,123,500,115,44,88);
 function findMax(){
    var i, max = 0;
    for (i =0; i < arguments.length; i++){
        if (arguments[i]> max){
            max = arguments[i];
        }
    }
    return max;

 }

 