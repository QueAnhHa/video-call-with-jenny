import React, {useState, useCallback } from 'react';
import Lobby from './Lobby';
import Room from './Room';

const VideoChat = () => {
    const [username, setUsername] = useState('');
    const [roomName, setRoomName] = useState('');
    const [token, setToken] = useState(null);

    // Functions to handle updating username and roomName
    const handleUsernameChange = useCallback(event => {
        setUsername(event.target.value);
    }, []);

    const handleRoomNameChange = useCallback(event => {
        setRoomName(event.target.value);
    }, []);

    const handleSubmit = useCallback(async event => {
        event.preventDefault();
        //Add temporary Access token here to test
        const data = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2VlN2NlNzFmY2JhYjRkMWY4NzQ2Yjc3ZDBjMTljMjIwLTE2MDQyNTY4OTEiLCJpc3MiOiJTS2VlN2NlNzFmY2JhYjRkMWY4NzQ2Yjc3ZDBjMTljMjIwIiwic3ViIjoiQUM4Y2E3YTg2NzNhMmQ5ODUyOTZlZjAxM2Y3ZTBkYTUzNSIsImV4cCI6MTYwNDI2MDQ5MSwiZ3JhbnRzIjp7ImlkZW50aXR5IjoiSmVubnkiLCJ2aWRlbyI6eyJyb29tIjoiRnVuIFJvb20ifX19.YIS8aiB0AiuUH83zdxVQ4J1lChTe7QKnALhI3sbg9QM";
        setToken(data);
        // const data = await fetch('/video/token', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         identity: username,
        //         room: roomName
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }).then(res => res.json());
        // setToken(data.token);
    }, [username, roomName]);

    const handleLogout = useCallback(event => {
        setToken(null);
    }, []);

    let render;
    if (token) {
        render = (
            <Room roomName={roomName} token={token} handleLogout={handleLogout} />
        );
    } else {
        render = (
            <Lobby 
                username={username}
                roomName={roomName}
                handleUsernameChange={handleUsernameChange}
                handleRoomNameChange={handleRoomNameChange}
                handleSubmit={handleSubmit}
            />
        );
    }

    return render;
};

export default VideoChat;