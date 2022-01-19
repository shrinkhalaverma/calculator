getValues = function () {
  number1 = parseFloat(document.getElementById("number1").value);
  number2 = parseFloat(document.getElementById("number2").value);
  result = {
    number1: number1,
    number2: number2,
  };
  return result;
};
// Addition
addButton = document.getElementById("AddButton");
addOperation = function () {
  number = getValues();
  sum = number.number1 + number.number2;

  console.log(sum);
  document.getElementById("result").value = sum;
};
// Subtraction

subButton = document.getElementById("SubButton");
subOperation = function () {
  number = getValues();
  sub = number.number1 - number.number2;

  console.log(sub);
  document.getElementById("result").value = sub;
};

// Multiplication
multiplicationButton = document.getElementById("MulButton");
mulOperation = function () {
  number = getValues();
  mul = number.number1 * number.number2;

  console.log(mul);
  document.getElementById("result").value = mul;
};

//Division
divisionButton = document.getElementById("DivButton");
divOperation = function () {
  number = getValues();
  div = number.number1 / number.number2;

  console.log(div);
  document.getElementById("result").value = div;
};
