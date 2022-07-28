import { useState, useEffect } from "react"
import { marked } from "marked"

import 'bootstrap/dist/css/bootstrap.min.css';

import INITIAL_MARKDOWN from "./utils/markdown"
import Header from "./components/Header";
import Cards from "./components/Cards";
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Footer from "./components/Footer";

const App = () => {

  // belum paham
  marked.setOptions({
    breaks: true
  });

  const [textArea, setTextArea] = useState(INITIAL_MARKDOWN)
  
  useEffect(()=>{
    console.info("success update")
  },[textArea])

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
                  value={textArea}
                  >
                </Form.Control>
            </Cards>
          </Col>
          <Col xs={12} md={6}>
            <Cards title="Preview here">
              <div 
                id="preview"
                className="p-3"
                dangerouslySetInnerHTML={{
                  __html: marked(textArea,),
                }}
                >
              </div>
            </Cards>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </main>
  );
}

export default App;
