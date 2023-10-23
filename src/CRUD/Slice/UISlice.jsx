import { createSlice } from "@reduxjs/toolkit";

const data = [
  { name: "Ayush", batch: "EA24", course: "MERN", age: 22 },
  { name: "Ayush", batch: "EA24", course: "MERN", age: 22 },
  { name: "Ayush", batch: "EA24", course: "MERN", age: 22 },
  { name: "Ayush", batch: "EA24", course: "MERN", age: 22 },
  { name: "Ayush", batch: "EA24", course: "MERN", age: 22 },
];

const Slice = createSlice({
  name: "student",
  initialState: { data },
  reducers: {
    editStudent: (state, action) => {
      state[Selection.payload.Index] = action.payload.info;
    },
    addStudent: (state, action) => {
      state.push(action.payload.tempObj);
    },
  },
});

export const { editStudent, addStudent } = Slice.actions;
export default Slice.reducer;
