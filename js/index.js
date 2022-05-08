const number = document.getElementById('number');
var v1="";
var v2="";
var firstOper = true;
var secOper = false;
var lastOper = false;
var op = "";
op2 = "";
function mth(o){
    if (o == "+") {
      number.innerHTML = v1 + v2;
      number.innerHTML += op2;
      v1 = v1+v2;
      v2 = "";
    }
    else if (o == "-") {
      number.innerHTML = v1 - v2;
      number.innerHTML += op2;
      v1 = v1-v2;
      v2 = "";
    }
    else if (o == "/") {
      number.innerHTML = v1 / v2;
      number.innerHTML += op2;
      v1 = v1/v2;
      v2 = "";
    }
    else if (o == "X") {
      number.innerHTML = v1 * v2;
      number.innerHTML += op2;
      v1 = v1*v2;
      v2 = "";
    }
    
}
function eqmth(o){
    if (o == "+") {
      number.innerHTML = v1 + v2;
      v1 = v1+v2;
      v2 = "";
    }
    else if (o == "-") {
      number.innerHTML = v1 - v2;
      v1 = v1-v2;
      v2 = "";
    }
    else if (o == "/") {
      number.innerHTML = v1 / v2;
      v1 = v1/v2;
      v2 = "";
    }
    else if (o == "X") {
      number.innerHTML = v1 * v2;
      v1 = v1*v2;
      v2 = "";
      
    }
    
}

function assignNumber(num){
  number.innerHTML += num;
  if (firstOper) {
    v1 += num;
  }
  else {
    v2 += num;
  }
}
function assignOperator(operator){
  
  if (firstOper) {
    number.innerHTML += operator;
    firstOper = false;
    secOper = true;
    op = operator;
    
  }
  else if (secOper) {
    v1 = parseFloat(v1);
    v2 = parseFloat(v2);
    op2 = operator;
    if (operator=="="){
      eqmth(op);
    }else{
      mth(op);
    }
    op = operator;
    secOper = false;
    lastOper = true;
  }
  else if (lastOper) {
    v1 = parseFloat(v1);
    v2 = parseFloat(v2);
    op2 = operator;
    if (operator=="="){eqmth(op);}else{mth(op);}
    op = operator;
   // number.innerHTML += operator;
    
    
  }
}




