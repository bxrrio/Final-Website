//once clicking on the webpage the song will play
window.addEventListener('click', () => {
    document.getElementById("song").play();
});

//function to validate inputs and show the secret message
function validateInputs() {
    //get the input values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var fullName = firstName + ' ' + lastName;
    var zipCode = document.getElementById('zipCode').value;

    //check if full name is more than 20 characters
    if (fullName.length > 20) {
      alert('Full name should not exceed 20 characters!');
      return;
    }

    //check if zip code contains 5 digits
    if (zipCode.length !== 5 || isNaN(zipCode)) {
      alert('Zip code should contain 5 digits!');
      return;
    }

    //if inputs are valid, show the secret message
    document.getElementById('message').style.display = 'block';
}