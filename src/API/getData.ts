type TUniversity = {
  alpha_two_code: string;
  country: string;
  domains: Array<String>;
  name: string;
  web_pages: Array<String>;
};

export const getData = async (url: string) => {
  let dataArr: Array<TUniversity> = [];

  await fetch(url)
    .then(async (response) => response.json())
    .then((data) => {
      dataArr = data;
    });
  return dataArr;
};
