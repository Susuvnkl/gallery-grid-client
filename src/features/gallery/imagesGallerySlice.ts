import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";

interface ImageState {
  images: Image[];
  loading: boolean;
  error: string | null;
  category: string;
  page: number;
  sortBy: string;
}

const initialState: ImageState = {
  images: [],
  loading: false,
  error: null,
  category: "flowers", // default category
  page: 1,
  sortBy: "id",
};
const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess(state, action: PayloadAction<Image[]>) {
      state.images = action.payload;
      state.loading = false;
    },
    fetchFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure, setPage, setCategory, setSortBy } =
  imagesSlice.actions;

export const fetchSortedImages =
  (category: string, sortBy: string, page: number) => async (dispatch: any) => {
    dispatch(fetchStart());
    try {
      const url = `http://localhost:5000/sorted?category=${category}&sortBy=${sortBy}&page=${page}`;
      const response = await axios.get<Image[]>(url);
      dispatch(fetchSuccess(response.data));
    } catch (err) {
      dispatch(fetchFailure(err.toString()));
    }
  };

// Thunk function
export const fetchImages =
  (category: string, page: number): any =>
  async (
    dispatch: (arg0: {
      payload: string | Image[] | undefined;
      type: "images/fetchStart" | "images/fetchSuccess" | "images/fetchFailure";
    }) => void
  ) => {
    dispatch(fetchStart());
    try {
      const url = `http://localhost:5000/images?category=${category}&page=${page}`;
      const response = await axios.get<Image[]>(url);
      dispatch(fetchSuccess(response.data));
    } catch (err) {
      dispatch(fetchFailure(err.toString()));
    }
  };

export const selectImages = (state: RootState) => state.images;

export default imagesSlice.reducer;
