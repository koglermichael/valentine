document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('page1').classList.remove('active');
    document.getElementById('page2').classList.add('active');
});

document.getElementById('noButton').addEventListener('click', function() {
    const noButton = document.getElementById('noButton');
    noButton.style.transform = 'translateX(20px)';
});

document.getElementById('nextButton').addEventListener('click', function() {
    document.getElementById('page2').classList.remove('active');
    document.getElementById('page3').classList.add('active');
});

document.getElementById('dateNextButton').addEventListener('click', function() {
    const date = document.getElementById('datePicker').value;
    // Save date to Firebase here
    document.getElementById('page3').classList.remove('active');
    document.getElementById('page4').classList.add('active');
});

document.getElementById('foodNextButton').addEventListener('click', function() {
    const food = document.getElementById('foodSelect').value;
    // Save food choice to Firebase here
    document.getElementById('page4').classList.remove('active');
    document.getElementById('page5').classList.add('active');
});

document.getElementById('dessertNextButton').addEventListener('click', function() {
    const dessert = document.getElementById('dessertSelect').value;
    // Save dessert choice to Firebase here
    document.getElementById('page5').classList.remove('active');
    document.getElementById('page6').classList.add('active');
});

document.getElementById('activityNextButton').addEventListener('click', function() {
    const activity = document.getElementById('activitySelect').value;
    // Save activity choice to Firebase here
    document.getElementById('page6').classList.remove('active');
    document.getElementById('page7').classList.add('active');
});

// Initialize the first page
document.getElementById('page1').classList.add('active');