import s from "./FormPassInput.module.scss";

type Data = {
  title: string;
  description: string;
  passValidError?: boolean;
  passEqualError?: boolean;
  errorMessage?: string;
  getPasswordValue?: (value: string) => void;
  getSecondPasswordValue?: (value: string) => void;
};

const FormPassInput = (DATA: Data) => {
  const getPassValue = (e: React.FormEvent<HTMLInputElement>) => {
    if (DATA.getPasswordValue) {
      DATA.getPasswordValue(e.currentTarget.value);
    }
    if (DATA.getSecondPasswordValue) {
      DATA.getSecondPasswordValue(e.currentTarget.value);
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
            type="password"
            className={s.form_input}
            id={DATA.title}
            onChange={getPassValue}
            style={
              DATA.passValidError === true || DATA.passEqualError === true
                ? styles.active
                : styles.deactive
            }
          />
          {(DATA.passValidError === true || DATA.passEqualError === true) && (
            <label htmlFor={DATA.title}>{DATA.errorMessage}</label>
          )}
        </div>

        <p className={s.form_description}>{DATA.description}</p>
      </form>
    </>
  );
};

export default FormPassInput;
