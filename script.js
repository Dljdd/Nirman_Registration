const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function expandTextarea() {
    var textarea = document.getElementById('projectBrief');
    var numberOfLines = (textarea.value.match(/\n/g) || []).length + 1; // Count number of lines
    textarea.style.height = numberOfLines * 2.5 + "em"; // Adjust height based on number of lines
}

registerBtn.addEventListener('click', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the fields
    var teamName = getElementVal('teamName');
    var theme = getElementVal('theme');
    var abstract = getElementVal('Abstract');
    var leaderName = getElementVal('leadername');
    var institute = getElementVal('Institute');
    var leaderPhone = getElementVal('leaderphone');
    var leaderEmail = getElementVal('leaderemail');
    var name1 = getElementVal('name1');
    var phone1 = getElementVal('phone1');
    var mail1 = getElementVal('mail1');
    var name2 = getElementVal('name2');
    var phone2 = getElementVal('phone2');
    var mail2 = getElementVal('mail2');
    var name3 = getElementVal('name3');
    var phone3 = getElementVal('phone3');
    var mail3 = getElementVal('mail3');
    var name4 = getElementVal('name4');
    var phone4 = getElementVal('phone4');
    var mail4 = getElementVal('mail4');

    // Check if the fields are empty
    if (teamName === '') {
        alert('Please enter a team name');
    } 
    else if (abstract === '') {
        alert('Please enter an abstract');
    } 
    else if (leaderName === '') {
        alert('Please enter a team leader name');
    } 
    else if (institute === '') {
        alert('Please enter the institute name');
    } 
    else if (leaderPhone === '') {
        alert('Please enter the team leader\'s phone number');
    } 
    else if (leaderEmail === '') {
        alert('Please enter the team leader\'s email');
    } 
    else {
        // If the form is valid, submit it!
        container.classList.add("active"); 

        // Save the data to Firebase
        saveMessages(teamName, theme, abstract, leaderName, institute, leaderPhone, leaderEmail, name1, phone1, mail1, name2, phone2, mail2, name3, phone3, mail3, name4, phone4, mail4);
    }
});