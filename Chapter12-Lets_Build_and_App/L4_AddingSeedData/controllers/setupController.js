var Todos = require('../models/todoModel');

module.exports = function (app) {
    app.get('/api/setupTodos', function (req, res) {
        //seed database
        var starterTodos = [
            {
                username: 'Mike',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Dustin',
                todo: 'Watch Stranger Things EP3',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Hillary',
                todo: 'Order take out for roomies',
                isDone: true,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function (err, results) {
            if (err) throw err;
            res.send(results);
        });
    });
}