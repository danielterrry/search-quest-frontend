import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import Card from './Card';
import { styled } from 'styled-components';

const Container = styled.div`
  display: inline-flex;
  gap: 16px;
`;

const Dashboard = () => {
  const { profile } = useAuth();

  return (
    <Container>
      <div className="grid">
        <div className="col-sm-6 col-lg-4">
          <Card title={profile.firstName}>
            <p>Role: {profile.role}</p>
            <Button>Explore</Button>
          </Card>
        </div>

        <div className="col-sm-6 col-lg-4">
          <Card title="Inbox">
            <p>Read important messages from applications</p>
          </Card>
        </div>

        <div className="col-sm-6 col-lg-4">
          <Card title="Applications">
            <p>Read important messages from applications</p>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
