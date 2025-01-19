const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');
const { swaggerUi, swaggerSpec } = require('./swagger');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use('/tasks', taskRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
