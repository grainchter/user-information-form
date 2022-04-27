import s from "./FormButton.module.scss";

type Data = {
  changeDate: string | null;
  changeTime: string | null;
  sendDataToServer: () => void;
};

const FormButton = (DATA: Data) => {
  return (
    <>
      <form className={s.form}>
        <button className={s.button} onClick={DATA.sendDataToServer}>
          Изменить
        </button>
        {DATA.changeDate && (
          <div className={s.button_title}>
            последние изменения {DATA.changeDate} в {DATA.changeTime}
          </div>
        )}
      </form>
    </>
  );
};

export default FormButton;
