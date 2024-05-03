const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

let userInfo = {
    name: 'Guilherme',
    age: 30,
    address: 'Rua Exemplo, 123',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, consectetur.'
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/user', (req, res) => {
    res.json(userInfo);
});

app.post('/api/user', (req, res) => {
    userInfo = req.body;
    res.json({ message: 'Informações do usuário atualizadas com sucesso!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
