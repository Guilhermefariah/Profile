document.getElementById('update-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var newName = document.getElementById('new-name').value;
    var newAge = document.getElementById('new-age').value;
    var newAddress = document.getElementById('new-address').value;
    var newBio = document.getElementById('new-bio').value;
    fetch('/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newName,
            age: newAge,
            address: newAddress,
            bio: newBio
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('name').innerText = newName;
        document.getElementById('age').innerText = 'Idade: ' + newAge;
        document.getElementById('address').innerText = 'Rua: ' + newAddress;
        document.getElementById('bio').innerText = 'Biografia: ' + newBio;
        document.getElementById('update-form').reset();

        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Ocorreu um erro ao atualizar as informações do usuário.');
    });
});
