
import './App.css';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <>
      <Form.Group className="mb-3">
        <Form.Label className ="part1" >Disabled input</Form.Label>
        <Form.Control placeholder="Disabled input" disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className = "part1">Disabled select menu</Form.Label>
        <Form.Select disabled>
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check  type="checkbox" label="Can't check this" disabled />
      </Form.Group>
    </>
    </div>
  );
}

export default App;
