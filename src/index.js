module.exports = function toReadable (number) {
  const numbers = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    const second_numbers = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
    let neededDigit = number % 10;
    
    if (number < 20) { 
        return numbers[number];
    }
    else if (number < 100) {
        return second_numbers[~~(number/10)-2] + (neededDigit? " " + numbers[neededDigit]: "");
    }
    else if (number < 1000) {
        return numbers[~~(number/100)] + " hundred" + (number%100 == 0? "" : " " + toReadable(number%100));
    }
    else {
        return toReadable(~~(number/1000)) + " thousand" + (number%1000 != 0? " " + toReadable(number%1000): "");
    }
}
