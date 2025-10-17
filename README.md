# Fortris Chatbot Application

A modern web application featuring a Fortris-inspired landing page with an integrated Ollama-powered AI chatbot.

## 🏗️ Architecture

[![](https://mermaid.ink/img/pako:eNp9kttymzAQhl9Fo2ubgAU-6CIzxnFsZ1o7EzvTmUIuFLMxtCBRIXKo7XfvAnWnxGl1w2r3-7X_Cu3pVkVAOd1pkcdk44eS4CrKxyZxrZU0IKMgpKeQdMkdiK0J6UMDV2sc3Begia_VC34fSLd7SXwU1SQZ5znhnjNgLY1fU5NgKZ4fhSYTleVKgjRnyFUwB63-A0yDSSzMlyTagTnD0HITvBvNF9vvzWS_IxxsiZdhfStaNq-RmL7mGoqCrEE_45ic2bbThmofM0QvRJ5cbNFO1ThXiTQfgPMTGINITXyO_sv0eIHK8YJ8Em-gWwdXhVWaikwQ7jguc9vVuu1NUAPM6pHPOGn6cbNpxR7mm80tuV2tNwcya_KzOj8DCVoYwEfwo4TCHMiiKdctDujtDgr8AQW8E96sV8u_atNTy1DSDj6_JKLc6BI6NAOdiWpL9xUTUhNDBiHlGEbwJMoU7ymUR5TlQn5VKjsptSp3MeVPIi1wV-YR-rxKBF5d9iercVrQE1VKQzljXn0I5Xv6SvnQtZjDHKc_Yrbnun0svlHe9yzb85jTZ0O75w76vWOH_qy72tbQGTn2qC54PXs4OP4CJ6D37Q?type=png)](https://mermaid.live/edit#pako:eNp9kttymzAQhl9Fo2ubgAU-6CIzxnFsZ1o7EzvTmUIuFLMxtCBRIXKo7XfvAnWnxGl1w2r3-7X_Cu3pVkVAOd1pkcdk44eS4CrKxyZxrZU0IKMgpKeQdMkdiK0J6UMDV2sc3Begia_VC34fSLd7SXwU1SQZ5znhnjNgLY1fU5NgKZ4fhSYTleVKgjRnyFUwB63-A0yDSSzMlyTagTnD0HITvBvNF9vvzWS_IxxsiZdhfStaNq-RmL7mGoqCrEE_45ic2bbThmofM0QvRJ5cbNFO1ThXiTQfgPMTGINITXyO_sv0eIHK8YJ8Em-gWwdXhVWaikwQ7jguc9vVuu1NUAPM6pHPOGn6cbNpxR7mm80tuV2tNwcya_KzOj8DCVoYwEfwo4TCHMiiKdctDujtDgr8AQW8E96sV8u_atNTy1DSDj6_JKLc6BI6NAOdiWpL9xUTUhNDBiHlGEbwJMoU7ymUR5TlQn5VKjsptSp3MeVPIi1wV-YR-rxKBF5d9iercVrQE1VKQzljXn0I5Xv6SvnQtZjDHKc_Yrbnun0svlHe9yzb85jTZ0O75w76vWOH_qy72tbQGTn2qC54PXs4OP4CJ6D37Q)

## 🎥 Demo

https://github.com/user-attachments/assets/b5a5a880-c350-46cc-845c-7014727908d2

## 📋 System Requirements

- **Node.js** 18+ (for both frontend and backend)
- **Ollama** (for AI model)
- **npm** or **yarn** package manager

## 🚀 Quick Start

### 1. Install Ollama

```bash
# macOS/Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows
# Download from https://ollama.com/download
```

### 2. Pull the AI Model

```bash
ollama pull llama3.2
```

### 3. Start Ollama Service

```bash
# Set CORS to allow browser requests
export OLLAMA_ORIGINS="*"
ollama serve
```

**Note**: Ollama will run on `http://localhost:11434`

### 4. Install and Run Backend Server

```bash
cd server
npm install
npm start
```

The backend will run on `http://localhost:3001`

### 5. Install and Run Frontend

```bash
# In the project root directory
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`

## 🔧 Configuration

### Backend Configuration

Edit `server/index.js` to customize:

```javascript
const PORT = 3001;              // Backend server port
const OLLAMA_URL = 'http://localhost:11434';  // Ollama API endpoint
```

### Frontend Configuration

The ChatWidget connects to the backend at `http://localhost:3001/api/chat`. To change this, edit `src/components/ChatWidget.tsx`:

```typescript
const response = await fetch("http://localhost:3001/api/chat", {
  // ...
});
```

## 📡 API Documentation

### Backend Endpoints

#### POST /api/chat

Send a message to the Ollama chatbot.

**Request:**
```json
{
  "message": "Hello, how are you?",
  "model": "llama3.2"
}
```

**Response:**
```json
{
  "response": "I'm doing well, thank you for asking! How can I help you today?"
}
```

**Error Responses:**
- `503`: Ollama service unavailable
- `500`: Internal server error

#### GET /api/health

Check backend server health status.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-10-16T12:00:00.000Z"
}
```

## 🎨 Frontend Components

### Navbar
- Fortris logo and branding
- Navigation links (Platform, Industry, Solutions, Resources, Company)
- "Book a demo" CTA button

### Hero
- Main headline and value proposition
- Dashboard mockup with analytics
- Feature highlights

### ChatWidget
- Floating chat button in bottom-right corner
- Expandable chat interface
- Message history with user/assistant roles
- Loading states and error handling

## 🧪 Testing

### Test Ollama Connection

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Hello, test message",
  "stream": false
}'
```

### Test Backend Server

```bash
curl http://localhost:3001/api/health

curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello", "model": "llama3.2"}'
```

## 🔒 Security Considerations

### Development
- CORS is enabled for all origins (`*`) for development convenience
- Backend runs on localhost without authentication

### Production Recommendations
1. **Restrict CORS**: Update Express CORS configuration to allow only specific origins
2. **Add Authentication**: Implement JWT or API key authentication
3. **Rate Limiting**: Add rate limiting to prevent abuse
4. **Environment Variables**: Use `.env` files for configuration
5. **HTTPS**: Deploy with SSL/TLS certificates
6. **Input Validation**: Sanitize and validate all user inputs
7. **Logging**: Implement proper logging and monitoring

## 🛠️ Technology Stack

### Frontend
- **React 18.3** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **CORS** - Cross-origin support
- **node-fetch** - HTTP client

### AI
- **Ollama** - Local AI runtime
- **Llama 2** - Language model

## 📁 Project Structure

```
fortris-chatbot/
├── server/
│   ├── index.js           # Backend Express server
│   └── package.json       # Backend dependencies
├── src/
│   ├── components/
│   │   ├── Navbar.tsx     # Navigation component
│   │   ├── Hero.tsx       # Hero section
│   │   └── ChatWidget.tsx # Chatbot interface
│   ├── pages/
│   │   └── Index.tsx      # Main page
│   ├── index.css          # Design system
│   └── main.tsx           # App entry point
├── public/                # Static assets
├── README.md              # This file
└── package.json           # Frontend dependencies
```

## 🐛 Troubleshooting

### Ollama Not Running
**Error**: "Cannot connect to Ollama"

**Solution**:
```bash
# Check if Ollama is running
curl http://localhost:11434

# If not, start it
export OLLAMA_ORIGINS="*"
ollama serve
```

### Model Not Found
**Error**: "Model not found"

**Solution**:
```bash
ollama pull llama3.2
ollama list  # Verify model is installed
```

### CORS Errors
**Error**: "CORS policy blocked"

**Solution**: Make sure Ollama is started with CORS enabled:
```bash
export OLLAMA_ORIGINS="*"
ollama serve
```

### Backend Connection Failed
**Error**: "Failed to fetch"

**Solution**:
1. Verify backend is running: `curl http://localhost:3001/api/health`
2. Check that port 3001 is not in use
3. Restart the backend server

## 🚀 Deployment

### Backend Deployment Options
- **Railway.app** - Easy Node.js deployment
- **Render.com** - Free tier available
- **DigitalOcean App Platform** - Scalable hosting
- **AWS EC2** - Full control

### Frontend Deployment Options
- **Vercel** - Optimized for React/Vite
- **Netlify** - Simple static hosting
- **Cloudflare Pages** - Global CDN
- **GitHub Pages** - Free hosting

### Important Notes
- Ollama requires a server with GPU for optimal performance
- Consider using cloud AI APIs (OpenAI, Anthropic) for production instead of self-hosted Ollama
- Update API URLs in production builds

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📞 Support

For issues or questions:
- Open a GitHub issue
- Check the troubleshooting section
- Review Ollama documentation: https://ollama.com/docs

---

Built with ❤️ using React, Node.js, and Ollama
