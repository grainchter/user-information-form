import s from "./FormSelectInput.module.scss";

type Data = {
  title: string;
  optionData?: Array<TUniversity>;
  optionCityData?: Array<string>;
  getCityValue?: (value: string) => void;
  getUniversityValue?: (value: string) => void;
};

type TUniversity = {
  alpha_two_code: string;
  country: string;
  domains: Array<String>;
  name: string;
  web_pages: Array<String>;
};

const FormSelectInput = (DATA: Data) => {
  const getSelectedData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (DATA.getCityValue) {
      DATA.getCityValue(e.currentTarget.value);
    }

    if (DATA.getUniversityValue) {
      DATA.getUniversityValue(e.currentTarget.value);
    }
  };

  return (
    <>
      <form className={s.form}>
        <p className={s.form_title}>{DATA.title}</p>
        <select
          className={s.form_input}
          onChange={getSelectedData}
          defaultValue=""
        >
          <option disabled value="">
            -- select an option --
          </option>
          {DATA.optionData &&
            DATA.optionData.map((item: TUniversity, index: any) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}

          {DATA.optionCityData &&
            DATA.optionCityData.map((item: string, index: any) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
        </select>
      </form>
    </>
  );
};

export default FormSelectInput;
