import s from "./App.module.scss";
import Form from "./Components/Form/Form";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeCityValue, changeUniversityValue } from "./store/store";

import cityJSON from "./json/cities.json";
import { getData } from "./API/getData";

const App = () => {
  const dispatch = useDispatch();

  //записываем списки университетов и городов в redux
  const sendDataToRedux = async () => {
    let university = await getData(
      "http://universities.hipolabs.com/search?country=United+Kingdom"
    );
    let city = await sortedCityArray();
    if (city) {
      dispatch(changeCityValue({ cityData: city }));
    }

    if (university) {
      dispatch(changeUniversityValue({ universityData: university }));
    }
  };

  //сортировка cityJSON
  const sortedCityArray = async () => {
    let citySortedArr: Array<string> = [];

    //находим города с населением > 50000
    cityJSON.find((element) => {
      if (Number(element.population) > 50000) {
        citySortedArr.push(element.city);
      }
    });

    //находим город с наибольшим населением
    let max = cityJSON.reduce((acc, curr) =>
      acc.population > curr.population ? acc : curr
    );

    //сортируем по алфавиту
    citySortedArr.sort();

    //удаляем из массива город с наибольшим населением и записываем в начало
    let newSortedArr = citySortedArr.filter(function (f) {
      return f !== max.city;
    });
    newSortedArr.splice(0, 0, max.city);

    return newSortedArr;
  };

  useEffect(() => {
    sendDataToRedux();
  }, []);
  return <Form />;
};

export default App;
