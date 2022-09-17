import { ContactForm, Container, Heading, Section } from 'components';

export const AddContactPage = () => {
  return (
    <Section>
      <Container>
        <Heading textAlign="center" marginBottom="50px">
          Add Contact Page
        </Heading>

        <ContactForm />
      </Container>
    </Section>
  );
};
