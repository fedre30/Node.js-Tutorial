const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// using body-parser library
app.use(bodyParser.json());

// Initializing Task ID
let nextTaskId = 1;

// Some basic tasks to begin
const tasks = [
  { id: nextTaskId++, title: 'Node.js, what is it ?' },
  { id: nextTaskId++, title: 'RESTful APIs' },
  { id: nextTaskId++, title: 'Express and other frameworks' },
  { id: nextTaskId++, title: 'Express: setup' },
  { id: nextTaskId++, title: 'Express: routing' },
  { id: nextTaskId++, title: 'Express: creating our first endpoint' },
  { id: nextTaskId++, title: 'Express: interacting with Vue.js (or any other framework)' },
  { id: nextTaskId++, title: 'Express: persistence' },
];


// GET request for todoList
app.get('/todo', function (req, res) {
  res.json(tasks);
});

// GET request for each task
app.get('/todo/:todoId', function (req, res) {
  const todoId = parseInt(req.params.todoId);
  const task = tasks.find(function (task) {
    return task.id === todoId;
  });
  if(typeof task === 'undefined'){
    res.status(404);
    res.send();
    return;
  }
  res.json(task);
});

//POST request for todoList

app.post('/todo', function (req, res) {
  const task = req.body;
  task.id = nextTaskId++;
  tasks.push(task);
  res.send();
});

//PUT /todo
//PUT /todo/:todoId


//DELETE request to delete a task

app.delete('/todo/:todoId', function (req, res) {
  const todoId = parseInt(req.params.todoId);
  const taskIndex = tasks.findIndex(function (task) {
    return task.id === todoId;
  });

  if(taskIndex === -1){
    res.status(404);
    res.send();
    return;
  }

  tasks.splice(taskIndex, 1);
  res.send();
});

//Listening port 3000

app.listen(3000);
