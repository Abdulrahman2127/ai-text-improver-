import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import OpenAI from 'openai'
dotenv.config()

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
})

const app = express()
const PORT = 5001
app.use(cors())
app.use(express.json())

app.post('/api/improve', async (req, res) => {
  try {
    const { text } = req.body
    const response = await openai.chat.completions.create({
      model: 'openai/gpt-oss-20b:free',
      messages: [
        {
          role: 'system',
          content:
            'You are a professional writing assistant. Return only the improved text without explanations or headings.',
        },
        {
          role: 'user',
          content: `Improve the following text:\n\n${text}`,
        },
      ],
    })
    res.json({
      text: response.choices[0].message.content,
    })
  } catch (error) {
    console.log(error)
  }
})

app.get('/', (req, res) => {
  res.send('Mini MERN Backend 🚀')
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
