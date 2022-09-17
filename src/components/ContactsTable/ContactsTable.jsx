import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  editContact,
  getContacts,
} from 'redux/contacts/contactsSlice.js';
import { BaseTable, THead, Td, Th } from './ContactsTable.styled.js';
import { RiDeleteBin5Line } from 'react-icons/ri';
import React from 'react';
import { useState } from 'react';

export const ContactsTable = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [currentValue, setCurrentValue] = useState('');
  const [currentContact, setCurrentContact] = useState({});
  const tableHeaders = ['№', 'avatar', 'name', 'age', 'status', 'action'];
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const onEditChange = e => {
    setCurrentValue(e.targetValue);
  };

  const onUpdateContact = (id, contact) => {};

  return (
    <>
      {contacts.length > 0 ? (
        <BaseTable>
          <THead>
            <tr>
              {tableHeaders.map(item => (
                <Th key={item.toLowerCase()}>{item}</Th>
              ))}
            </tr>
          </THead>

          <tbody>
            {contacts.map(({ id, avatar, name, age, status }, index) => (
              <tr key={id}>
                <Td>{index + 1}</Td>
                <Td></Td>
                <Td>
                  {isEditable ? (
                    <input
                      type="text"
                      value={currentValue}
                      onChange={onEditChange}
                    />
                  ) : (
                    name
                  )}
                </Td>
                <Td>{age}</Td>
                <Td>
                  <b>{status === 'yes' ? 'online' : 'offline'}</b>
                </Td>
                <Td>
                  <button type="button" onClick={() => handleDeleteContact(id)}>
                    <RiDeleteBin5Line color="red" size={24} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsEditable(!isEditable)}
                  >
                    EDIT
                  </button>
                </Td>
              </tr>
            ))}
          </tbody>
        </BaseTable>
      ) : (
        <p
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: '18px',
          }}
        >
          {'There are no contacts 😭'}
        </p>
      )}
    </>
  );
};
