import React, { useState } from "react";
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Words from './components/Words';
import './App.css';

const StyledContainer = styled.div`
  align-items: center;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  padding: 30px;
  width: 100vw;
`;

const H2Styles = styled.h2`
  font-size: 40px;
  margin: 0 0 30px;
`;

const Form = styled.form`
  display: block;
  max-width: 800px;
  width: 100%;
`;

const Textarea = styled.textarea`
  border: 2px solid #ccc;
  border-radius: 5px;
  display: block;
  height: 200px;
  margin: 0 0 10px;
  max-width: 800px;
  padding: 15px;
  outline: none;
  width: 100%;
`;

const Button = styled.button`
  background-color: #0d6efd;
  border: none;
  border-radius: 5px;
  color: #fff;
  display: block;
  font-size: 18px;
  height: 45px;
  margin: 0 0 10px;
  max-width: 800px;
  transition: background-color linear .25s;
  width: 100%;
  &:hover {
    background-color: #025ce2;
  }
`;

const P = styled.p`
  display: block;
  color: #198754;
  font-size: 16px;
  margin: 0 0 20px;
  opacity: 0;
  &.show {
    opacity: 1;
  }
`;

export default function App() {
  const [text, setText] = useState("");
  const [show, setShow] = useState(Boolean);
  const [fullText, setFulltext] = useState([]);

  let onSubmit = (e) => {
    e.preventDefault();

    var test = text.split(' ');
    setFulltext(test);
    // console.log('======', test);
  };

  let toDo = [{
    'id': '1',
    'list': fullText,
  }];

  let onDragEnd = (result) => {
    if (!result.destination) { return; }
    let sourceIdx = parseInt(result.source.index);
    let destIdx = parseInt(result.destination.index);
    let draggedLink = toDo[0].list[sourceIdx];
    let newList = toDo[0].list.slice();
    newList.splice(sourceIdx, 1);
    newList.splice(destIdx, 0, draggedLink);
    toDo[0].list = newList;

    setTimeout(() => {
      setShow(true);

      // setTimeout(()=>{
      //   setShow(false);
      // }, 2000);

//       fetch('https://mywebsite.com/endpoint/', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue',
//   })
// })

    }, 2000);
  }

  return (
    <StyledContainer>

      <H2Styles>Turbulent React Test</H2Styles>

      <Form onSubmit={onSubmit}>
        <Textarea
          id="text"
          type="text"
          name="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <Button>Send</Button>
      </Form>

      <P className={show ? 'show' : ''}>Has been saved!</P>

      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <Words toDo={toDo[0]} />
      </DragDropContext>
    </StyledContainer>
  );
}