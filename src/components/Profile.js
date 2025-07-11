import { styled } from 'styled-components';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import ProfileForm from './forms/ProfileForm';
import Users from './Users';
import Card from './Card';

const InfoLabel = styled.span`
  font-weight: bold;
`;

const Profile = () => {
  const { profile } = useAuth();
  const [isEdit, setIsEdit] = useState(false);

  const { firstName, lastName, role } = profile;

  return (
    <div className="grid">
      <div className="col-sm-6 col-lg-4">
        {!isEdit ? (
          <Card fullWidth className="profile-info" title="Profile">
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
          </Card>
        ) : (
          <ProfileForm isEdit={isEdit} onEdit={setIsEdit} />
        )}
      </div>
      <div className="col-sm-6 col-lg-4">
        <Card fullWidth title="Users">
          <Users />
        </Card>
      </div>
    </div>
  );
};

export default Profile;
