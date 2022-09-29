import { ButtonBackTo } from "../ButtonBackTo/ButtonBackTo";
import { Field, BtnSearch, Form, WrapperForm } from "./SearchForm.styled";
import { FiSearch } from "react-icons/fi";

interface IProrsForm {
  onSubmitForm: (event: any) => void;
  autoComplete: string;
}

export function SearchForm({ onSubmitForm }: IProrsForm) {
  return (
    <WrapperForm>
      <ButtonBackTo />

      <Form onSubmit={onSubmitForm}>
        <Field
          type="text"
          name="query"
          placeholder="Enter the name's search..."
        />
        <BtnSearch type="submit">
          <FiSearch style={{ marginTop: 3 }} />
        </BtnSearch>
      </Form>
    </WrapperForm>
  );
}
