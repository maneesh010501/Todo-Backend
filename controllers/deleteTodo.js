const Todo = require('../models/Todo');

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: 'Deleted todo successfully'
        })
    }
    catch (err) {
        console.error(err);
        res.status(500).json(
            {
                success: false,
                data: "todo not deleted",
                message: err.message
            }
        )
    }
}

