import { styled } from 'styled-components';
import { H1Typography, H2Typography } from './Typography';
import Pill from './Pill';
import CategoryCard from '../components/CategoryCard';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import GetStartedForm from './forms/GetStartedForm';

const data = [
  {
    id: 1,
    category: 'category 1',
    colorScheme: 'pink',
    title: 'Healthcare',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    id: 2,
    category: 'category 2',
    colorScheme: 'blue',
    title: 'Education',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    id: 3,
    category: 'category 3',
    colorScheme: 'purple',
    title: 'Technology',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
];

const BannerHero = styled.div`
  padding: 1rem;
  display: flex;
  z-index: 1;
  position: relative;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  border-radius: 16px;

  .categories {
    display: flex;
    gap: 1rem;
  }
`;

const BannerContent = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .lead {
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Latest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
`;

const Banner = () => {
  const navigate = useNavigate();

  return (
    <>
      <BannerHero>
        <BannerContent>
          <div className="lead">
            <H1Typography>Let's get you connected</H1Typography>
            <H2Typography>
              Take the next step towards your perfect career
            </H2Typography>
            <GetStartedForm />
          </div>
          <div className="categories">
            {data.map((item) => (
              <Pill
                id={item.id}
                colorScheme={item.colorScheme}
                text={item.title}
                onClick={() => console.log('clicked ', item.id)}
              />
            ))}
          </div>
        </BannerContent>
      </BannerHero>
      <Latest>
        <H2Typography>Latest</H2Typography>
        <div className="grid">
          {data.map((item) => (
            <div className="col-sm-6 col-lg-4">
              <CategoryCard key={item.id}>
                <div
                  style={{
                    marginBottom: '16px',
                  }}
                >
                  <Pill
                    id={item.id}
                    colorScheme={item.colorScheme}
                    text={item.title}
                  />
                </div>
                <div
                  style={{
                    marginBottom: '16px',
                  }}
                >
                  {item.description}
                </div>
                <Button onClick={() => navigate('/apply')} variant="outline">
                  Apply Now
                </Button>
              </CategoryCard>
            </div>
          ))}
        </div>
      </Latest>
    </>
  );
};

export default Banner;
