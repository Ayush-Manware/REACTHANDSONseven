import { configureStore } from "@reduxjs/toolkit";
import Slice from "../Slice/Slice";

const Store = configureStore({
    reducer:{
  student: Slice
    }
})

export default Store