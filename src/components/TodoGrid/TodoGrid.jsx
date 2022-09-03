import React from 'react';
import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';
import { useSelector } from 'react-redux';
export const TodoGrid = () => {
  const todos = useSelector(state => state.todos);
  return (
    <>
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ... </Text>
      )}

      <Grid>
        {todos.length > 0 &&
          todos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo id={todo.id} query={todo.query} counter={index + 1} />
            </GridItem>
          ))}
      </Grid>
    </>
  );
};
