import { createSlice } from "@reduxjs/toolkit";

const stuData = [
    {name:"Ayush",batch:"EA24", course:"MERN", age: 22},
    {name:"Ayush",batch:"EA24", course:"MERN", age: 22},
    {name:"Ayush",batch:"EA24", course:"MERN", age: 22},
    {name:"Ayush",batch:"EA24", course:"MERN", age: 22},
    {name:"Ayush",batch:"EA24", course:"MERN", age: 22},
]

const Slice = createSlice({
    name:"StudentData",
    initialState: stuData,
    reducers:{
        addStudent:(state,action) =>{

        },
        editStudent:(state,action) =>{

        }
    }

})

export const {editStudent, addStudent} = Slice.actions;
export default Slice.reducer;