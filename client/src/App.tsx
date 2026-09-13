import { useState } from 'react'
import Container from '@mui/material/Container'
import CardContent from '@mui/material/CardContent'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'
import './App.css'
import Box from '@mui/material/Box'

type ImproveResponse = {
  text: string
}

function App() {
  const [text, setText] = useState<string>('')
  const [result, setResult] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

const Result = async () => {
    try {
      setLoading(true)
      const res = await axios.post('https://ai-text-improver-wr0f.onrender.com/api/improve', {
        text,
      })
      
      setResult(res.data.text)
      setText('')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Container
        style={{
          height: '100vh',
          color: 'black',
          display: 'flex',
          
          alignItems: 'center',
          justifyContent: "center"
        }}
        maxWidth="md"
      >
        <Box
          sx={{
            minWidth: '1000px',
            width: '100%',
            minHeight: '800px',
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              gap: '5px',
            }}
          >
            <h1 style={{ fontSize: '60px' }}>
              🤖 AI Text Improver
            </h1>

            <p style={{ color: '#6B7280' }}>
              Enhance your writing with AI.
            </p>
          </div>

          <CardContent
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              gap: '15px',
            }}
          >
            <h2>📝 Enter your text</h2>

            <textarea
              value={text}
              onChange={(e) => {
                setText(e.target.value)
              }}
              placeholder="Type or paste your text here..."
              style={{
                width: '100%',
                height: '180px',
                padding: '15px',
                borderRadius: '10px',
                border: '1px solid #3B82F6',
                fontSize: '16px',
                outline: 'none',
                resize: 'none',
                boxSizing: 'border-box',
              }}
            />

            <button
              onClick={Result}
              disabled={loading}
              style={{
                opacity: loading ? 0.6 : 1,
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="none"
                      d="M0 0h24v24H0z"
                    />

                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    />
                  </svg>
                </div>
              </div>

              <span>Improved Text</span>
            </button>
          </CardContent>

          <CardContent
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              gap: '15px',
            }}
          >
            <h2>✨ Improved Result</h2>

            <div
              style={{
                border: '1px solid #D1D5DB',
                padding: '15px',
                background: '#FAFAFA',
                borderRadius: '12px',
                minHeight: '180px',
              }}
            >
              {loading ? (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '180px',
                    flexDirection: 'column',
                    gap: '15px',
                  }}
                >
                  <CircularProgress />

                  <p>Improving your text...</p>
                </div>
              ) : (
                <p>{result}</p>
              )}
            </div>

            <br />
          </CardContent>

          <p
            style={{
              color: '#6B7280',
              marginTop: '50px',
            }}
          >
            Designed and developed by Abdulrahman2127 © 2026
          </p>
        </Box>
      </Container>
    </div>
  )
}

export default App