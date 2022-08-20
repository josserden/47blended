import { Section, Container, CountryInfo, Loader, Heading } from 'components';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { countryId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    fetchCountry(countryId)
      .then(data => setCountry(data))
      .catch(error => {
        setError(error);

        alert(`Error message ${error.message}`);

        navigate('/404', { replace: true });
      })
      .finally(() => setIsLoading(false));
  }, [countryId, navigate]);

  const { id, flag, capital, countryName, population, languages } = country;

  return (
    <Section>
      <Container>
        <div
          style={{
            marginBottom: '60px',
            color: '#f2f2f2',
            letterSpacing: '0.06em',
            textDecoration: 'underline',
            borderColor: 'gray',
          }}
        >
          <Link to="/">Back to Countries</Link>
        </div>

        {isLoading && <Loader />}
        {!error && (
          <CountryInfo
            key={id}
            flag={flag}
            capital={capital}
            country={countryName}
            population={population}
            languages={languages}
          />
        )}
      </Container>
      {error && <Heading> Error - {error.message} </Heading>}
    </Section>
  );
};
