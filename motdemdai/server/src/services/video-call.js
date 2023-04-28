export const socketVideo = (socket) => {
    socket.on('join-room-v2', ({roomId, userId}) => {
        socket.join(roomId);
        socket.to(roomId).broadcast.emit('user-connected-v2', userId);
    });
};