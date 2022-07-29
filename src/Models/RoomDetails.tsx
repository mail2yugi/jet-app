export interface RoomDetails {
    id: string,
    name: string,
    owner: string,
    type: string
}

export interface LoggedInUserDetails {
    id: string,
    name: string,
    room: any
}

export interface UserDetails {
    user: string,
    message: string,
    room: RoomDetails
}

export interface BaseProps {
    socket: any,
    user: any
}

export interface ActivateUser {
    user: string,
    state: string
}


export interface RandomNumberModel {
    number: number,
    isFirst: boolean,
    user: string,
    selectedNumber: number,
    isCorrectResult: boolean,
}

export interface GameOver {
    user: string,
    isOver: boolean
}