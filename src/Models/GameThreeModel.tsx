import { ActivateUser, GameOver, LoggedInUserDetails, RandomNumberModel, UserDetails } from "./RoomDetails";

export interface RestApiState {
    userList: Array<any>,
    roomsList: Array<any>,
    userDetails: LoggedInUserDetails,
    activeSesion: ActivateUser,
    roomUserDetails: UserDetails,
    playingWithUser: UserDetails,
    messangerList: Array<RandomNumberModel>,
    gameOver: GameOver,
    roomStatus: boolean
}