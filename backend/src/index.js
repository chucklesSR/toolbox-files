import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Server is up and running')
})

app.get('/files/data', async (req, res) => {
  const { fileName } = req.query
  if (fileName) {
    console.log(`File name is ${fileName}`)
  }
  return res.status(200).json({ data: 'This is a sample data', status: 200 })
})

const main = async () => {
  await app.listen(port)
  console.log(`Server listening at http://localhost:${port}`)
}

main()
