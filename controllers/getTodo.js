const Todo = require('../models/Todo')

exports.getTodo = async (req, res) => {
    try {
        //fetch all todo items from db
        const todos = await Todo.find({});

        //response
        res.status(200).json({
            success: true,
            data: todos,
            message: 'All Todo items are fetched'
        })
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: 'Todo items are not fetched',
            message: err.message
        })
    }
}

exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id });

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "no data is found with given id"
            })
        }

        else {
            res.status(200).json({
                success: true,
                data: todo,
                message: `Todo with id ${id} fetched successfully`
            })
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: 'Todo is not fetched',
            message: err.message
        })
    }
}