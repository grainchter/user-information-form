import s from "./FormCheckInput.module.scss";

type Data = {
  title: string;
  description: string;
  getCheckedValue?: (value: boolean) => void;
};

const FormCheckInput = (DATA: Data) => {
  const getCheckedStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (DATA.getCheckedValue) {
      DATA.getCheckedValue(e.currentTarget.checked);
    }
  };

  return (
    <>
      <form className={s.form}>
        <p className={s.checkbox_title}>{DATA.title}</p>
        <div className={s.checkbox_container}>
          <input type="checkbox" className={s.select_input}
            id="checkbox"
            onChange={getCheckedStatus}
            defaultChecked={true}
          />
          <label htmlFor="checkbox">{DATA.description}</label>
        </div>
      </form>
    </>
  );
};

export default FormCheckInput;
