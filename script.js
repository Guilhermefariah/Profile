document.getElementById('update-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;
    var bio = document.getElementById('bio').value;

    document.querySelector('.user-info h2').innerText = name;
    document.querySelectorAll('.user-info p')[0].innerText = 'Idade: ' + age;
    document.querySelectorAll('.user-info p')[1].innerText = 'Rua: ' + address;
    document.querySelectorAll('.user-info p')[4].innerText = 'Biografia: ' + bio;
    document.getElementById('update-form').reset();
});
