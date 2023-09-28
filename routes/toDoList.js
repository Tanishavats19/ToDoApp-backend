const ToDoModel = require('../models/toDoSchema')

//to view all th task in the to-do list
module.exports.getToDoList = async (req,res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

//to save new tasks in the list
module.exports.saveToDO = async (req,res) => {
    const {text} = req.body

    ToDoModel.create({text})
        .then((data) => {
            console.log("New Task added Successfully");
            console.log(data);
            res.send(data)
        })
}

//to delete finished task from the list
module.exports.deleteToDo = async (req,res) => {
    const {_id, text} = req.body;
    ToDoModel.findByIdAndDelete(_id)
        .then(() => res.send("Deleted Successfully"))
        .catch((err) => console.log(err))
}

//to update a task in the list
module.exports.updateToDo = async (req,res) => {
    const {_id, text} = req.body;
    ToDoModel.findByIdAndUpdate(_id, {text})
        .then(() => res.send("Updated Successfully"))
        .catch((err) => console.log(err))
}