import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { removeTodo } from 'redux/todos-Slice';

export const Todo = ({ query, counter, id }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    console.log(id);
    dispatch(removeTodo(id));
  };
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{query}</Text>
        <DeleteButton type="button" onClick={onDelete}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
