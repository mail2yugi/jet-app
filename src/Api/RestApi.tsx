export const fetchRooms = () => {
    return fetch('http://localhost:3004/rooms').then(res => res.json());
}

export const fetchUser = (id: string) => {
    return fetch('http://localhost:3004/users/' + id).then(res => res.json());
}