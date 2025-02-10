import { styled } from 'styled-components';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import ProfileForm from './forms/ProfileForm';
import { H2Typography } from './Typography';
import Users from './Users';

const Container = styled.div`
  .item {
    display: flex;
    gap: 8px;
  }
`;

const InfoLabel = styled.span`
  font-weight: bold;
`;

const Profile = () => {
  const { profile } = useAuth();
  const [isEdit, setIsEdit] = useState(false);

  const { firstName, lastName, role } = profile;

  return (
    <>
      {!isEdit ? (
        <Container className="form">
          <H2Typography>Profile</H2Typography>
          <div className="item">
            <InfoLabel>First Name: </InfoLabel> <div>{firstName}</div>
          </div>
          <div className="item">
            <InfoLabel>Last Name: </InfoLabel> <div>{lastName}</div>
          </div>
          <div className="item">
            <InfoLabel>Role: </InfoLabel> <div>{role}</div>
          </div>
          <Button onClick={() => setIsEdit(!isEdit)}>Edit</Button>
        </Container>
      ) : (
        <ProfileForm />
      )}
      <Users />
    </>
  );
};

export default Profile;
