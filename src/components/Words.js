import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Item from './Item';

const StyledContainer = styled.div`
  height: calc(100vh - 445px);
  max-width: 800px;
  overflow-y: scroll;
  width: 100%;
`;

export default function Words(props) {

  const { toDo } = props;

  let wordsHendler = (items) => {
    return items.map(
      (item, index) => <Item index={index} item={item} key={index}></Item>
    )
  }

  return (
    <Droppable
      droppableId={toDo.id}
    >
      {provided => (
        <StyledContainer
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {wordsHendler(toDo.list)}
          {provided.placeholder}
        </StyledContainer>
      )}
    </Droppable>
  );
}