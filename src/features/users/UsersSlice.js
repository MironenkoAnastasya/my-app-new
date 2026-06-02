import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    "Users/fetchUsers",
    async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/Users");
        return response.data
    }
)

const UsersSlice = createSlice({
    name: "Users",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers : {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })

        .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default UsersSlice.reducer
