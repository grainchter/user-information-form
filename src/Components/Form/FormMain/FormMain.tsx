import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFinalDataValue } from "../../../store/store";
import { TStore } from "../../../store/hooks";
import FormButton from "./FormComponents/FormButton";
import FormCheckInput from "./FormComponents/FormCheckInput";
import FormMailInput from "./FormComponents/FormMailInput";
import FormPassInput from "./FormComponents/FormPassInput";
import FormSelectInput from "./FormComponents/FormSelectInput";
import { Container, Line } from "./FormMain.style";

const FormMain = () => {
  const [password, setPassword] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [university, setUniversity] = useState<string | null>(null);
  const [checked, setChecked] = useState<boolean>(true);

  const [changeDate, setChangeDate] = useState<string | null>(null);
  const [changeTime, setChangeTime] = useState<string | null>(null);

  const { universityData, cityData, finalData } = useSelector(
    (state: TStore) => state.dataReducer
  );

  const dispatch = useDispatch();

  const [emailValid, setEmailValid] = useState<boolean>(false);

  const [passValidError, setPassValidError] = useState<boolean>(false);
  const [passEqualError, setPassEqualError] = useState<boolean>(false);

  const getPasswordValue = (value: string) => {
    setPassword(value);
    if (value.length >= 0 && value.length < 5) {
      setPassValidError(true);
    } else {
      setPassValidError(false);
    }
  };

  const getSecondPasswordValue = (value: string) => {
    if (password === value) {
      setPassEqualError(false);
    } else {
      setPassEqualError(true);
    }
  };

  const getEmailValue = (value: string) => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]+)$/;

    if (reg.test(value) === false) {
      setEmailValid(true);
    } else if (reg.test(value) === true) {
      setEmailValid(false);
      setEmail(value);
    }
  };

  const getCityValue = (value: string) => {
    setCity(value);
  };

  const getUniversityValue = (value: string) => {
    setUniversity(value);
  };

  const getCheckedValue = (value: boolean) => {
    setChecked(value);
  };

  const sendDataToServer = () => {
    if (password && email && university && city && passEqualError === false) {
      let now = new Date(Date.now());

      let date = now.toLocaleString("ru-RU", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      let time = now.toLocaleTimeString("ru-RU");

      setChangeDate(date);
      setChangeTime(time);
    } else {
      alert("Необходимо заполнить поля");
    }
  };

  useEffect(() => {
    dispatch(
      changeFinalDataValue({
        finalData: [
          {
            city: city,
            university: university,
            password: password,
            email: email,
            subscribeToSpam: checked,
            status: finalData[0].status,
            uId: finalData[0].uId,
          },
        ],
      })
    );
  }, [password, email, city, university, checked]);

  return (
    <>
      <Container>
        <FormSelectInput
          title="Ваш город"
          optionCityData={cityData}
          getCityValue={getCityValue}
        />
        <FormSelectInput
          title="Ваш университет"
          optionData={universityData}
          getUniversityValue={getUniversityValue}
        />
        <Line />
        <FormPassInput
          title="Пароль"
          description="Ваш новый пароль должен содержать не менее 5 символов."
          getPasswordValue={getPasswordValue}
          passValidError={passValidError}
          errorMessage="Используйте не менее 5 символов"
        />
        <FormPassInput
          title="Пароль еще раз"
          description="Повторите пароль, пожалуйста, это обезопасит вас с нами
          на случай ошибки."
          getSecondPasswordValue={getSecondPasswordValue}
          passEqualError={passEqualError}
          errorMessage="Пароли не совпадают"
        />
        <Line />
        <FormMailInput
          title="Электронная почта"
          description="Можно изменить адрес, указанный при регистрации."
          getEmailValue={getEmailValue}
          emailValidError={emailValid}
          errorMessage="Неверный E-mail"
        />
        <FormCheckInput
          title="Я согласен"
          description="принимать актуальную информацию на емейл"
          getCheckedValue={getCheckedValue}
        />
        <FormButton
          sendDataToServer={sendDataToServer}
          changeDate={changeDate}
          changeTime={changeTime}
        />
      </Container>
    </>
  );
};

export default FormMain;
