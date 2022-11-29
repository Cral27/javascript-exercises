const repeatString = function(string,times) {
   if(times<0){
    return 'ERROR';
   }else if(times === 1){
    return string;
   }else if(times>0){
    return string + repeatString(string,times-1);
   }else{
    return '';
   }
};
repeatString('',Number);

// Do not edit below this line
module.exports = repeatString;
