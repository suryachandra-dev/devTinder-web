import io from "socket.io-client"
import { BASE_URL } from "./constants"
export const createSocketConnection = () => {
    // returns a socket connection created by calling the io function with BASE_URL as its argument
    if(location.hostname === "localhost"){
        return io(BASE_URL);
    }else{
        return io("/",{path:"/api/socket.io"});
    }
}