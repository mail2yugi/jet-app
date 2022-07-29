import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRooms, fetchUser } from '../Api/RestApi';

export const AsyncConstants = {
    'rooms': 'restApi/fetchCount',
    'userDetails': 'restApi/fetchUserDetails'
}

export const fetchRoomsAsync = createAsyncThunk(AsyncConstants.rooms, async () => {
    const response = await fetchRooms();
    return response;
});

export const fetchUserAsync = createAsyncThunk(AsyncConstants.userDetails, async (id: string) => {
    const response = await fetchUser(id);
    return response;
});