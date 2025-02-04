import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

export function TableComponent({ files }) {
  return(
    <Container className="mt-4">
      <Table>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
          <tbody>
          {files.length ? files.map((file, index) => (
            file.lines.map((line, lineIndex) => (
              <tr key={`${index}-${lineIndex}`}>
                <td>{file.file}</td>
                <td>{line.text}</td>
                <td>{line.number}</td>
                <td>{line.hex}</td>
              </tr>
            ))
          )) : (
            <tr>
              <td colSpan="4" className="text-center">No data found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  )
}
