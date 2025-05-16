const express = require('express');
const { Task } = require('./models');
const app = express();
app.use(express.json());

//CRUD Endpoints
app.get('/tasks', async (req, res) => {

    const tasks = await Task.create(req.body);
    res.json(tasks);
});

app.get('/task', async (req, res) => {
    const task = await Task.findAll();
    res.json(task);
});

app.listen(3000, () =>
    console.log('Server is running on port 3000'));
