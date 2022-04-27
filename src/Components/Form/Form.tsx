import { Container } from "./Form.style";
import FormHeader from "./FormHeader/FormHeader";
import FormMain from "./FormMain/FormMain";

const Form = () => {
  return (
    <Container>
      <FormHeader />
      <FormMain />
    </Container>
  );
};

export default Form;
