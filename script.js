function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    document.getElementById("interest").innerHTML = principal * years * rate / 100;
    document.getElementById("futureYear").innerHTML = 2021 + years;
}

function slider ()
{
    var rangeslider = document.getElementById("sliderRange");
    var output = document.getElementById("out");
    output.innerHTML = rangeslider.value;

    rangeslider.oninput = function(){
        output.innerHTML = this.value;
    }
}
