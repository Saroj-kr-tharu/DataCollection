
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    ArrayList: [],
    status: null,

};

export const createData = createAsyncThunk("data/createData", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:3009/api/v1/create', data);

        console.log(response);

        return await response;
    } catch (error) {
        toast.error("Something went wrong, cannot download books ");
        return rejectWithValue(error.response?.data || error.message);
    }
});



const ExpenseSlice = createSlice({
    name: 'expenseTracker',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(createData.fulfilled, (state, action) => {
                
                state.status='Fullfill'

            });
    }

});


export default ExpenseSlice.reducer;