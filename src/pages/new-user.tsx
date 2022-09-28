import Container from "../components/atoms/Container";
import CreateUserForm from "../components/sections/CreateUserForm";

export default function CreateUserPage(): JSX.Element {
  return (
    <div className="flex-grow pt-8">
      <section id="create-user">
        <Container>
          <CreateUserForm />
        </Container>
      </section>
    </div>
  );
}
