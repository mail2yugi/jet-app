import { createSlice } from '@reduxjs/toolkit';
import { RestApiState } from '../Models/GameThreeModel';
import { RootState } from '../store/store';
import { fetchRoomsAsync, fetchUserAsync } from '../Actions/GameThreeActions';

const initialState: RestApiState = {
    userList: [],
    roomsList: [],
    userDetails: null!,
    roomUserDetails: null!,
    activeSesion: null!,
    playingWithUser: null!,
    messangerList: [],
    gameOver: { isOver: false, user: '' },
    roomStatus: false,
};

export const GameThreeReducer = createSlice({
    name: 'restapi',
    initialState,
    reducers: {
        onMessage: (store, action) => {
            if ((action?.payload?.message || "").includes("has joined") && store.roomUserDetails?.room.type !== 'CPU') {
                store.playingWithUser = action.payload;
            } else {
                store.roomUserDetails = action.payload;
            }
        },
        onReady: (store, action) => {
            store.roomStatus = action.payload.state;
        },
        activateYourTurn: (store, action) => {
            store.activeSesion = action.payload;
        },
        onRandomNumber: (store, action) => {
            console.log(store.gameOver.isOver)
            if (!store.gameOver.isOver)
                store.messangerList = store.messangerList.concat([action.payload]);
        },
        gameOver: (store, action) => {
            console.log(store.gameOver.isOver)
            if (!store.gameOver.isOver)
                store.gameOver = action.payload;
        },
        leaveRoom: (store, action) => {
            store.userDetails = action.payload;
            store.roomUserDetails = action.payload!;
            store.activeSesion = action.payload!;
            store.playingWithUser = action.payload!;
            store.messangerList = [];
            store.gameOver = { isOver: false, user: '' };
        },
        startNewGame: (store, action) => {
            store.messangerList = action.payload;
            store.gameOver = { isOver: false, user: '' };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRoomsAsync.fulfilled, (state, action) => {
            state.roomsList = action.payload;
        });
        builder.addCase(fetchUserAsync.fulfilled, (state, action) => {
            state.userDetails = action.payload;
        });
    },
});

export const { onMessage, onReady, activateYourTurn, onRandomNumber, gameOver, leaveRoom, startNewGame } = GameThreeReducer.actions;

export const selectLoggedInUser = (state: RootState) => state.gameThreeReducer.userDetails;
export const selectRoomUser = (state: RootState) => state.gameThreeReducer.roomUserDetails;
export const selectMessangerList = (state: RootState) => state.gameThreeReducer.messangerList.filter((value, index, self) => self.indexOf(value) === index);
export const selectPlayingWithUser = (state: RootState) => state.gameThreeReducer.playingWithUser;
export const selectActiveSesion = (state: RootState) => state.gameThreeReducer.activeSesion;
export const selectRoomStatus = (state: RootState) => state.gameThreeReducer.roomStatus;
export const selectRooms = (state: RootState) => state.gameThreeReducer.roomsList;
export const selectGameOver = (state: RootState) => state.gameThreeReducer.gameOver;

export default GameThreeReducer.reducer;