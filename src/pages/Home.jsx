import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useFetchCountries } from 'hooks/useFetchCountries';

export const Home = () => {
  const { countries, error, isLoading } = useFetchCountries();

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        <CountryList countries={countries} />
        {error && <Heading> Error - {error.message} </Heading>}
      </Container>
    </Section>
  );
};
