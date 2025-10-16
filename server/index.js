import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const { message, model = 'llama3.2' } = req.body;

    console.log(`[${new Date().toISOString()}] Received chat request for model: ${model}`);

    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        prompt: message,
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.status}`);
    }

    const data = await response.json();
    
    console.log(`[${new Date().toISOString()}] Successfully generated response`);

    res.json({ response: data.response });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Error:`, error.message);
    
    if (error.message.includes('ECONNREFUSED')) {
      res.status(503).json({ 
        error: 'Cannot connect to Ollama. Make sure Ollama is running at http://localhost:11434' 
      });
    } else {
      res.status(500).json({ 
        error: 'Internal server error',
        details: error.message 
      });
    }
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`\n🚀 Fortris Chatbot Backend Server`);
  console.log(`📍 Running on http://localhost:${PORT}`);
  console.log(`🤖 Connecting to Ollama at http://localhost:11434\n`);
});
