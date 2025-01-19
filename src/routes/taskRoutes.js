const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    filterTasks,
} = require('../controllers/taskController');

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Listar todas as tarefas
 *     description: Retorna uma lista com todas as tarefas.
 *     responses:
 *       200:
 *         description: Lista de tarefas retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   status:
 *                     type: string
 */
router.get('/', getAllTasks);

/**
 * @swagger
 * /tasks/filter:
 *   get:
 *     summary: Filtrar tarefas
 *     description: Permite filtrar tarefas pelo título ou status.
 *     parameters:
 *       - name: title
 *         in: query
 *         description: Título parcial para buscar.
 *         required: false
 *         schema:
 *           type: string
 *       - name: status
 *         in: query
 *         description: Status das tarefas (pendente ou concluído).
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarefas filtradas retornadas com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   status:
 *                     type: string
 */
router.get('/filter', filterTasks);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Criar uma nova tarefa
 *     description: Adiciona uma nova tarefa à lista.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 id:
 *                   type: integer
 */
router.post('/', createTask);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Atualizar uma tarefa
 *     description: Atualiza as informações de uma tarefa existente.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID da tarefa a ser atualizada.
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso.
 */
router.put('/:id', updateTask);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Excluir uma tarefa
 *     description: Remove uma tarefa existente.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID da tarefa a ser excluída.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tarefa excluída com sucesso.
 */
router.delete('/:id', deleteTask);

module.exports = router;
