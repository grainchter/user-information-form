import s from "./FormMailInput.module.scss";

type Data = {
  title: string;
  description: string;
  errorMessage?: string;
  emailValidError?: boolean;
  getEmailValue?: (value: string) => void;
};

const FormMailInput = (DATA: Data) => {
  const getMailValue = (e: React.FormEvent<HTMLInputElement>) => {
    if (DATA.getEmailValue) {
      DATA.getEmailValue(e.currentTarget.value);
    }
  };

  const styles = {
    active: {
      borderColor: "#ff0000",
    },
    deactive: {
      borderColor: "#999999",
    },
  } as const;

  return (
    <>
      <form className={s.form}>
        <p className={s.form_title}>{DATA.title}</p>
        <div className={s.input_label}>
          <input
            type="email"
            className={s.form_input}
            id="emailInput"
            onChange={getMailValue}
            style={
              DATA.emailValidError === true ? styles.active : styles.deactive
            }
          />
          {DATA.emailValidError === true && (
            <label htmlFor="emailInput">{DATA.errorMessage}</label>
          )}
        </div>
        <p className={s.form_description}>{DATA.description}</p>
      </form>
    </>
  );
};

export default FormMailInput;
