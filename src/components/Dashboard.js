import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import Card from './Card';

const Dashboard = () => {
  const { profile } = useAuth();

  return (
    <div className="grid">
      <div className="col-sm-6 col-lg-4">
        <Card fullWidth title={profile.firstName}>
          <p>Role: {profile.role}</p>
          <Button>Explore</Button>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-4">
        <Card fullWidth title="Inbox">
          <p>Read important messages from applications</p>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-4">
        <Card fullWidth title="Applications">
          <p>Read important messages from applications</p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
