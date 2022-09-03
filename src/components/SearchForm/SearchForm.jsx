import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { addTodo } from 'redux/todos-Slice';
import { nanoid } from 'nanoid';

export const SearchForm = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handleInput = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo({ id: nanoid(), query }));
    setQuery('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
};
