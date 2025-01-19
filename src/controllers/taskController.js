const db = require('../models/taskModel');
const Joi = require('joi');

const taskSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(5).max(500).required(),
    status: Joi.string().valid('pendente', 'concluído').required(),
});

const validateTask = (req, res, next) => {
    const { error } = taskSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

const getAllTasks = (req, res) => {
    db.getTasks((err, tasks) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao listar tarefas' });
        }
        res.status(200).json(tasks);
    });
};

const createTask = (req, res) => {
    const task = req.body;
    db.createTask(task, (err, id) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao criar tarefa' });
        }
        res.status(201).json({ message: 'Tarefa criada com sucesso', id });
    });
};

const updateTask = (req, res) => {
    const { id } = req.params;
    const task = { ...req.body, id };

    db.updateTask(task, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao atualizar tarefa' });
        }
        res.status(200).json({ message: 'Tarefa atualizada com sucesso' });
    });
};

const deleteTask = (req, res) => {
    const { id } = req.params;

    db.deleteTask(id, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao excluir tarefa' });
        }
        res.status(200).json({ message: 'Tarefa excluída com sucesso' });
    });
};

const filterTasks = (req, res) => {
    const query = req.query;

    db.filterTasks(query, (err, tasks) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao filtrar tarefas' });
        }
        res.status(200).json(tasks);
    });
};

module.exports = { validateTask, getAllTasks, createTask, updateTask, deleteTask, filterTasks };
