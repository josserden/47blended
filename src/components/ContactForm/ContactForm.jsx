import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';

import {
  Button,
  LabelText,
  BaseForm,
  Label,
  Input,
} from './ContactForm.styled.js';

export const ContactForm = () => {
  const [name, setName] = useState('name', '');
  const [age, setAge] = useState('age', '');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'age':
        setAge(value);
        break;

      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    handleReset();
  };

  const handleReset = () => {
    setName('');
    setAge('');
  };

  return (
    <BaseForm onSubmit={handleSubmit}>
      <Label>
        <LabelText>
          <BsFillPersonFill />
          Name
        </LabelText>
        <Input
          placeholder="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </Label>

      <Label>
        <LabelText>
          <AiOutlineMessage />
          Age
        </LabelText>

        <Input
          placeholder="Age"
          type="number"
          name="age"
          pattern="^[0-9]"
          title="Only integer number"
          min="1"
          step="1"
          value={age}
          onChange={handleChange}
          required
        />
      </Label>

      <Button type="submit">add contact</Button>
    </BaseForm>
  );
};
