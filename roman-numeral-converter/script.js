document.getElementById('convert-btn').addEventListener('click', function() {
    var number = document.getElementById('number').value;
    var output = document.getElementById('output');

    if (number === "" || isNaN(number)) {
        output.innerText = "Please enter a valid number";
    } else if (number <= 0) {
        output.innerText = "Please enter a number greater than or equal to 1";
    } else if (number >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999";
    } else {
        var romanNumerals = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
        var roman = '';

        for (var i in romanNumerals) {
            while (number >= romanNumerals[i]) {
                roman += i;
                number -= romanNumerals[i];
            }
        }
        output.innerText = roman;
    }
});
