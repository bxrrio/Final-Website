window.addEventListener('click', () => {
    document.getElementById("song").play();
});

function isPalindrome(str) {
    //remove spaces and convert to lowercase
    let cleanStr = str.replace(/\s/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}

let continueChecking = true

while (continueChecking) {
    //prompt user to enter a string
    let inputString = prompt("Enter a string to check if it's a palindrome:");
    if (inputString !== null) {
        //notifying the user if the string is a palindrome or not 
        let result = isPalindrome(inputString) ? "It's a palindrome!" : "It's not a palindrome!";
        alert(result);
    }
    else {
        continueChecking = false;
    }
    //asking the user if they want to add another word/try again
    let continueInput = confirm("Would you like to try again?");
    if (!continueInput) { 
        break;
    }
}