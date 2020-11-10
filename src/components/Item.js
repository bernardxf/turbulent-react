import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const StyledContainer = styled.div`
  border-radius: 4px;
  margin: 0 0 10px;
  padding: 10px;
  background-color: ${props =>
    (props.isDragging ? 'rgba(25,135,84, .5)' : 'white')};
  cursor: ${props =>
    (props.isDragging ? 'grab;' : 'pointer;')};
  border: ${props =>
    (props.isDragging ? '1px solid #198754;'
      : '1px solid #ccc')};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.19);
`;

export default function Item(props) {
  const { item } = props;

  return (
    <Draggable
      draggableId={`${props.index}`}
      index={props.index}
    >
      {(provided, snapshot) => (
        <StyledContainer
          id='styled-cont'
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {item}
        </StyledContainer>
      )}
    </Draggable>
  );
}