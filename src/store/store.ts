import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import GameThreeReducer from '../Reducers/GameThreeReducer';

export const store = configureStore({
  reducer: {
    gameThreeReducer: GameThreeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
