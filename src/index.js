let count=0;
function passwordIsValid(password){
    let arr=password.split('');
if (!password){
    throw new Error('password should exist');
}
else{
    count++;
}

if (arr.length<=8){
    throw new Error('password should be longer than than 8 characters');
}
else{
    count++;
}
if (!testLowerCase(arr)){
    throw new Error('password should have at least one lowercase letter');
}
else{
    count++;
}
if (!testUpperCase(arr)){
    throw new Error('password should have at least one uppercase letter');
}
else{
    count++;
}
if (!testDigit(arr)){
    throw new Error('password should at least have one digit');
}
else{
    count++;
}
if (!testSpecial(arr)){
    throw new Error('password should have at least one special character');
}
else{
    count++;
}
if (!testWhitespace(arr)){
    throw new Error('password should have at least one whitespace character');
}
else{
    count++;
}
    
return true;
}
function passwordStrength(password){
count=0;
strength='';
  try{
passwordIsValid(password);
}
 catch(err){
         //console.log(err);
    }
console.log('password strength determined');
console.log(count);
if (count>=6){
    strength='strong';
}
return strength;
}

function testLowerCase(arry){
    let state=false
arry.forEach(element => {
    if (/[a-z]/.test(element)){
        state=true; 
    }
});
return state;
}
function testUpperCase(array){
    let state=false;
    array.forEach(element => {
        if (/[A-Z]/.test(element)){
            state= true;
        }
    });
    return state;
    }
    function testDigit(array){
    let state=false;
    array.forEach(element => {
        if (/[0-9]/.test(element)){
            state= true;
        }
    });
    return state;
    }
    function testSpecial(array){
    let state=false;
    array.forEach(element => {
        if (/[^a-zA-Z0-9]/.test(element)){
            state= true;
        }
    });
    return state;
    }
    function testWhitespace(array){
    let state=false;
    array.forEach(element => {
        if (/[\s]/.test(element)){
            state= true;
        }
    });
    return state;
    }
module.exports= {passwordIsValid,passwordStrength};