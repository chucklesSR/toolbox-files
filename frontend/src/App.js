import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { TableComponent } from './components/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/esm/Container';

const BASE_URL = 'http://localhost:3001/files/data'

const App = () => {
  const [search, setSearch] = useState('')
  const [files, setFiles] = useState([])

  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(data => setFiles(data.data))
  }, [])

  const handleOnSearch = () => {
    fetch(`${BASE_URL}?fileName=${search}`)
      .then(response => response.json())
      .then(data => setFiles(data.data))
  }
  
  return (
    <>
      <Header />
      
      <Container className="d-flex justify-content-center mt-4">
        <InputGroup style={{ maxWidth: '400px' }}>
          <Form.Control
            placeholder="Input file name"
            aria-label="Input file name"
            aria-describedby="basic-addon2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleOnSearch()}
          />
          <Button variant="secondary" id="button-addon2" onClick={handleOnSearch}>
            Search
          </Button>
        </InputGroup>
      </Container>
      
      <TableComponent files={files} />
    </>
  )
};

export default App;
