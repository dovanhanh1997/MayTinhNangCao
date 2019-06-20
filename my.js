function Display() {
    let SEVEN = parseInt(document.getElementById("seven").value);
    let CLOBRK = parseInt(document.getElementById("CloBrk").value);
    let OPENBRK = parseInt(document.getElementById("OpenBrk").value);
    let PERCENT = parseInt(document.getElementById("Percent").value);
    let EIGHT = parseInt(document.getElementById("eight").value);
    let NINE = parseInt(document.getElementById("nine").value);
    let DIVID = parseInt(document.getElementById("divid").value);
    let FOUR = parseInt(document.getElementById("four").value);
    let FIVE = parseInt(document.getElementById("five").value);
    let SIX = parseInt(document.getElementById("six").value);
    let MULTI = parseInt(document.getElementById("multi").value);
    let ONE = parseInt(document.getElementById("one").value);
    let TWO = parseInt(document.getElementById("two").value);
    let THREE = parseInt(document.getElementById("three").value);
    let MINUS = parseInt(document.getElementById("minus").value);
    let ZERO = parseInt(document.getElementById("zero").value);
    let DOT = parseInt(document.getElementById("dot").value);
    let ADD = parseInt(document.getElementById("add").value);

    document.getElementById("Screen").value += SEVEN;
    document.getElementById("Screen").value += CLOBRK;
    document.getElementById("Screen").value += OPENBRK;
    document.getElementById("Screen").value += PERCENT;
    document.getElementById("Screen").value += NINE;
    document.getElementById("Screen").value += DIVID;
    document.getElementById("Screen").value += FOUR;
    document.getElementById("Screen").value += FIVE;
    document.getElementById("Screen").value += SIX;
    document.getElementById("Screen").value += ONE;
    document.getElementById("Screen").value += TWO;
    document.getElementById("Screen").value += THREE;
    document.getElementById("Screen").value += MINUS;
    document.getElementById("Screen").value += ZERO;
    document.getElementById("Screen").value += DOT;
    document.getElementById("Screen").value += ADD;

}