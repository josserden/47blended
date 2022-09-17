import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contacts/contactsSlice.js';
import { BaseTable, THead, Td, Th } from './ContactsTable.styled.js';
import { RiDeleteBin5Line } from 'react-icons/ri';
import React from 'react';

export const ContactsTable = () => {
  const tableHeaders = ['№', 'avatar', 'name', 'age', 'status', 'action'];
  const contacts = useSelector(getContacts);

  console.log(contacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

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
                <Td>{name}</Td>
                <Td>{age}</Td>
                <Td>
                  <b>{status === 'yes' ? 'online' : 'offline'}</b>
                </Td>
                <Td>
                  <button type="button" onClick={() => handleDeleteContact(id)}>
                    <RiDeleteBin5Line color="red" size={24} />
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
