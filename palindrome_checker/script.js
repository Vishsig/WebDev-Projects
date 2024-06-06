const text = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

button.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission and page refresh
    const str = text.value;
    result.style.display = "hidden";
    if(str === ""){
        alert("Please input a value");
        return;
    }

    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reverseStr = cleanStr.split('').reverse().join('');

    let isPalindrome = true;

    for(let i = 0; i < cleanStr.length / 2; i++){
        if(cleanStr[i] !== reverseStr[i]){
            isPalindrome = false;
            break;
        }
    }  
    result.style.display="block";
    result.innerText = isPalindrome ? `${str} is a palindrome` : `${str} is not a palindrome`;
});





