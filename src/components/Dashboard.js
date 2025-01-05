import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { profile } = useAuth();

  return (
    <div className="container">
      {profile && (
        <>
          <h2>Welcome {profile.firstName}</h2>
          <p>Role: {profile.role}</p>
        </>
      )}
    </div>
  );
};

export default Dashboard;
