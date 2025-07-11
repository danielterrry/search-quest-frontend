import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import user from '../api/user';
import { useAuth } from '../contexts/AuthContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  const { profile } = useAuth();

  useEffect(() => {
    const getUsers = async () => {
      const response = await user.getUsers();

      if (response.status === 403) {
        setError("You don't have permission to access this.");
        return;
      }

      setUsers(response.results.filter((x) => x.id != profile.id));
    };

    getUsers();
  }, []);

  return (
    <Container>
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <UserList>
          {users.map((user) => (
            <div key={user.id} style={{ display: 'flex' }}>
              <UserItem>{user.firstName}</UserItem>
              <UserItem>{user.lastName}</UserItem>
            </div>
          ))}
        </UserList>
      )}
    </Container>
  );
};

export default Users;
