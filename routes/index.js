const {Router} = require('express');
const { getToDoList, saveToDO, deleteToDo, updateToDo } = require('./toDoList');

const router = Router()

//Api to fetch all the tasks to do list
router.get('/view', getToDoList)

//API to add a new task to the list
router.post('/add', saveToDO)

//API to update a task in the list
router.post('/update', updateToDo)

//API to delete a finished task
router.post('/delete', deleteToDo)

module.exports = router;

