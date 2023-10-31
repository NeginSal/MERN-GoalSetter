const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const goalRoutes = require('./routes/goalRoutes')
const { errorHandler } = require('./middleware/errorMiddleware')

const app = express()

app.use('/api/goals', goalRoutes)
app.use(express.json())
app.use(errorHandler)

app.listen(port, () => { console.log(`Server started on port ${port}`) })