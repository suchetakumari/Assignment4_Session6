// str is the string to parse
function checkBrackets(str){
    // depth of the parenthesis
    // ex : ( 1 ( 2 ) ( 2 ( 3 ) ) )
    var depth = 0;
    // for each char in the string : 2 cases
    for(var i in str){   
        if(str[i] == '('){
            // if the char is an opening parenthesis then we increase the depth
            depth ++;
        } else if(str[i] == ')') {
            // if the char is an closing parenthesis then we decrease the depth
            depth --;
        }  
        //  if the depth is negative we have a closing parenthesis 
        //  before any matching opening parenthesis
        if (depth < 0) return "incorrect";
    }
    // If the depth is not null then a closing parenthesis is missing
    if(depth > 0) return "incorrect";
    // OK !
    return "correct";
}
console.log(checkBrackets('( ( a + b ) / 5 abd )')); // correct
console.log(checkBrackets(') ( a + b ) )')); // incorrect
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 abc / ( a + 3 ) ) ) )')); // incorrect