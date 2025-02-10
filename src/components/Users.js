import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import user from '../api/user';
import { H2Typography } from './Typography';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.25rem;
`;

const UserList = styled.ul`
  list-style: none;
  padding: 0;
`;

const UserItem = styled.li`
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
`;

const ErrorMessage = styled.p`
  font-weight: bold;
`;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const response = await user.getUsers();

      if (response.status === 403) {
        setError("You don't have permission to access this.");
        return;
      }

      setUsers(response.data);
    };

    getUsers();
  }, []);

  return (
    <Container>
      <H2Typography>Users</H2Typography>
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <UserList>
          {users.map((user) => (
            <UserItem key={user.id}>{user.firstName}</UserItem>
          ))}
        </UserList>
      )}
    </Container>
  );
};

export default Users;
