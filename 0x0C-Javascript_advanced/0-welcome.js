function welcome(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;

    let displayFullName = function {
        alert("Welcome " + fullName + '!');
    }

    displayFullName();
}