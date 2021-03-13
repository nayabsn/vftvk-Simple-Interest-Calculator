// This function will display the range value for the "Interest Rate" selected by the user
function findRange()
{
    var slider1 = document.getElementById("myRange");
    var demo = document.getElementById("demo");
    demo.innerHTML = slider1.value;

    slider1.oninput = function() {
    demo.innerHTML = this.value;
    }
}

// This function will read and return the values entered by the user and calculate the year and interest
function compute()
{
    var p = Number(document.getElementById("a").value);
    var n = Number(document.getElementById("b").value);
    var r = Number(document.getElementById("myRange").value);

    // Validation check for the value entered for amount is >0
    if (p <= 0)
    {
        alert("Enter a positive number");
    }

    else {
        var result = 0;
        var futureYear = 0;
        var amount = p;
        var rate = r;
    
        result=(p*r*n/100);
        futureYear = 2021 + n;
        
        document.getElementById("result").innerHTML = result;
        document.getElementById("futureYear").innerHTML = futureYear;
        document.getElementById("amount").innerHTML = amount;
        document.getElementById("rate").innerHTML = rate;
    }
   
}
