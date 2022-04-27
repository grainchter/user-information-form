import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  universityData: Array<TUniversity>;
  cityData: Array<string>;
  finalData: Array<TFinalDataPayload>;
}

type TUniversity = {
  alpha_two_code: string;
  country: string;
  domains: Array<String>;
  name: string;
  web_pages: Array<String>;
};

type TFinalDataPayload = {
  city: string | null;
  university: string | null;
  password: string | null;
  email: string | null;
  subscribeToSpam?: boolean;
  status?: string;
  uId: number;
};

type universityPayload = {
  universityData: Array<TUniversity>;
};

type cityPayload = {
  cityData: Array<string>;
};

type finalDataPayload = {
  finalData: Array<TFinalDataPayload>;
};

const initialState = {
  universityData: [],
  cityData: [],
  finalData: [
    {
      city: null,
      university: null,
      password: null,
      email: null,
      subscribeToSpam: true,
      status: "",
      uId: 3596941,
    },
  ],
} as DataState;

const dataSlice = createSlice({
  name: "store",
  initialState: initialState,
  reducers: {
    changeUniversityValue: (
      state,
      { payload }: PayloadAction<universityPayload>
    ) => {
      state.universityData = payload.universityData;
    },
    changeCityValue: (state, { payload }: PayloadAction<cityPayload>) => {
      state.cityData = payload.cityData;
    },
    changeFinalDataValue: (
      state,
      { payload }: PayloadAction<finalDataPayload>
    ) => {
      state.finalData = payload.finalData;
    },
  },
});

export const { changeUniversityValue, changeCityValue, changeFinalDataValue } =
  dataSlice.actions;

export const dataReducer = dataSlice.reducer;
