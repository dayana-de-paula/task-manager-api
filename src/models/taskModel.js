const db = require('../config/database');

const getTasks = (callback) => {
    db.all('SELECT * FROM tasks', [], (err, rows) => {
        callback(err, rows);
    });
};

const createTask = (task, callback) => {
    const { title, description, status } = task;
    db.run('INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)', [title, description, status], function (err) {
        callback(err, this.lastID);
    });
};

const updateTask = (task, callback) => {
    const { id, title, description, status } = task;
    db.run(
        'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?',
        [title, description, status, id],
        function (err) {
            callback(err);
        }
    );
};

const deleteTask = (id, callback) => {
    db.run('DELETE FROM tasks WHERE id = ?', [id], function (err) {
        callback(err);
    });
};

const filterTasks = (query, callback) => {
    let sql = 'SELECT * FROM tasks WHERE 1=1';
    const params = [];

    if (query.status) {
        sql += ' AND status = ?';
        params.push(query.status);
    }

    if (query.title) {
        sql += ' AND title LIKE ?';
        params.push(`%${query.title}%`);
    }

    db.all(sql, params, (err, rows) => {
        callback(err, rows);
    });
};

module.exports = { getTasks, createTask, updateTask, deleteTask, filterTasks };
