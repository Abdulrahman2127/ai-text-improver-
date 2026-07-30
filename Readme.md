# ✨ AI Text Improver

An AI-powered web application that improves text quality using AI. Users can enter any text, and the application instantly returns a clearer, more polished version.

## 🚀 Features

- ✍️ Improve text instantly with AI
- ⚡ Fast and responsive interface
- 🔄 Loading indicator while generating results
- 🔒 Secure backend API API text with one click
- 📱 Responsive design

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Material UI
- Axios

### Backend
- Node.js
- Express.js
- OpenRouter API
- dotenv
- CORS

## 📂 Project Structure

```
ai-text-improver
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── server.js
│   ├── package.json
│   └── .env
```

## 💡 How It Works

1. The user enters text.
2. React sends the text to the Express backend using Axios.
3. The backend sends the request to the OpenRouter AI API.
4. The AI improves the text.
5. The improved text is returned to the frontend and displayed to the user.

## 🔒 Security

The API key is stored securely in the backend using environment variables (`.env`) and is never exposed to the frontend.
