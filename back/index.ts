import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import history from './routes/history'

const app = new Hono()

// CORS : autorise le front Vite sur localhost:5173
app.use('*', cors({ origin: 'http://localhost:5173' }))

// Route de santé
app.get('/', (c) => c.json({ status: 'ok', timestamp: new Date().toISOString() }))

// Routes API
app.route('/api', history)

const PORT = parseInt(process.env.PORT || '3000', 10)

console.log(`🚀 Server running at http://localhost:${PORT}`)

serve({
  fetch: app.fetch,
  port: PORT,
})
