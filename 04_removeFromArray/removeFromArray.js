const removeFromArray = function(Array,values) {
   
   /*const filteredArray = Array.filter(number => number !== remove) 

    return filteredArray*/
    /*for(var i=0; Array.length > i; i++)
        if(Array[i]=== 2){
            Array.splice(i,1);
        }
    return Array;*/
    /*
    for(i=0;i<Array.length;){
        if(Array[i] === remove){
            Array.splice(i,1)
        }
        ++i;
    }
    values = [3];
    Array = Array.filter(item => !values.includes(item));   
    return Array;*/
    let Array = Array.filter(item => values.indexOf(item) === -1);
};
removeFromArray([1,2,3,4],[3,2]);



// Do not edit below this line
module.exports = removeFromArray;
