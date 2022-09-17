import { ContactsTable, Container, Heading, Section } from 'components';

export const Home = () => {
  return (
    <Section>
      <Container>
        <Heading textAlign="center" marginBottom="50px">
          Home Page
        </Heading>

        <ContactsTable />
      </Container>
    </Section>
  );
};
