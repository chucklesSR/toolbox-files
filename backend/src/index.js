import express from 'express'
import axios from 'axios'

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Server is up and running')
})

const getFiles = async (files) => {
  const filesPromise = files.map(file => {
    return axios.get(`https://echo-serv.tbxnet.com/v1/secret/file/${file}`, {
      headers: {
        Authorization: 'Bearer aSuperSecretKey'
      }
    })
  })
  const filesData = await Promise.allSettled(filesPromise)
  const result = []

  filesData
    .filter(item => item.status === 'fulfilled' && item.value.status === 200)
    .map(item => item.value.data.split('\n').slice(1))
    .flat()
    .map(row => {
      const [file, text, number, hex] = row.split(',')
      return text && number && hex ? { file, text, number, hex } : null
    })
    .filter(Boolean)
    .forEach(({ file, ...line }) => {
      let fileEntry = result.find(entry => entry.file === file)

      if (!fileEntry) {
        fileEntry = { file, lines: [] }
        result.push(fileEntry)
      }

      fileEntry.lines.push(line)
    })

  return result
}

app.get('/files/data', async (req, res) => {
  const { fileName } = req.query
  if (fileName) {
    const files = await getFiles([fileName])
    return res.status(200).json({ data: files, status: 200 })
  }
  const { data } = await axios.get('https://echo-serv.tbxnet.com/v1/secret/files', {
    headers: {
      Authorization: 'Bearer aSuperSecretKey'
    }
  })

  const files = await getFiles(data.files)
  return res.status(200).json({ data: files, status: 200 })
})

const main = async () => {
  await app.listen(port)
  console.log(`Server listening at http://localhost:${port}`)
}

main()
