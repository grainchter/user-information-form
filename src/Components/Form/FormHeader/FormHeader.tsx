import s from "./FormHeader.module.scss";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFinalDataValue } from "../../../store/store";
import { TStore } from "../../../store/hooks";

const FormHeader = () => {
  const [editActive, setEditActive] = useState<boolean>(false);

  const [status, setStatus] = useState<string>("status");

  const dispatch = useDispatch();

  const { finalData } = useSelector((state: TStore) => state.dataReducer);

  const getStatusValue = (e: React.FormEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <header className={s.header}>
      <div className={s.header_title_container}>
        <div className={s.header_title}>
          Здравствуйте, <b>Человек №{finalData[0].uId}</b>
        </div>

        {editActive === false && (
          <a
            className={s.link}
            onClick={() => {
              setEditActive(!editActive);
            }}
          >
            Сменить статус
          </a>
        )}
        {editActive === true && (
          <a
            className={s.link}
            onClick={() => {
              setEditActive(!editActive);
              dispatch(
                changeFinalDataValue({
                  finalData: [
                    {
                      city: finalData[0].city,
                      university: finalData[0].university,
                      password: finalData[0].city,
                      email: finalData[0].email,
                      subscribeToSpam: finalData[0].subscribeToSpam,
                      status: status,
                      uId: finalData[0].uId,
                    },
                  ],
                })
              );
            }}
          >
            Сохранить статус
          </a>
        )}
      </div>

      <div className={s.status_tooltip}>
        {editActive === false && <p>{status}</p>}
        {editActive === true && (
          <input onChange={getStatusValue} type="text" value={status} />
        )}
      </div>
    </header>
  );
};

export default FormHeader;
