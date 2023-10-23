import { configureStore } from "@reduxjs/toolkit";
import Slice from "../Slice/UISlice";

const Store = configureStore({
    reducer:{
  student: Slice
    }
})

export default Store
