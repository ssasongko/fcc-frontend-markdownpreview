import { useState } from "react"

import INITIAL_MARKDOWN from "./utils/markdown"

import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Preview from "./components/Preview";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const App = () => {

  const [textArea, setTextArea] = useState(INITIAL_MARKDOWN)

  return (
    <main className="bg-dark h-100">
      <Header/>
      <Container className="my-5">
        <Row>
          <Col xs={12} md={6} className="">
            <Cards title="Write down your notes here">
                <Form.Control
                  id="editor" 
                  as="textarea"
                  className="p-3 h-100 border-0"
                  onChange={(e)=>{setTextArea(e.target.value)}}
                  value={textArea}>
                </Form.Control>
            </Cards>
          </Col>
          <Col xs={12} md={6}>
            <Cards title="Preview here">
              <Preview val={textArea}/>
            </Cards>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </main>
  );
}

export default App;
