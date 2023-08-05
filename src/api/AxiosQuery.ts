import axios from "axios";
export const URL_SERVER = `https://my-notes-server-project-481be4be43f0.herokuapp.com`;
export const URL_WEBSOCKET =
    "wss://my-notes-server-project-481be4be43f0.herokuapp.com";
export const REG_URL = `${URL_SERVER}/registration`;
export const LOGIN_URL = `${URL_SERVER}/login`;
export const GET_INFO_USER_URL = `${URL_SERVER}/InfoUser`;
export const NEW_NOTE_URL = `${URL_SERVER}/newNote`;
export const GET_USER_URL = `${URL_SERVER}/user`;
export const ADD_FRIEND_URL = `${URL_SERVER}/friends`;
export const MESSAGE_URL = `${URL_SERVER}/friends/message`;
export const UNREAD_MESSAGE_URL = `${URL_SERVER}/friends/unread/message`;
class AxiosQuery {
    async axiosQueryPost(
        data: object | FormData,
        url: string,
        stateLoading?: (value: boolean) => void
    ) {
        return await axios
            .post(url, data, { withCredentials: true })
            .then((response) => {
                return response;
            })
            .catch((e) => {
                return e.message;
            })
            .finally(() => {
                if (stateLoading) stateLoading(false);
            });
    }

    async axiosQueryGet(
        params: object,
        url: string,
        stateLoading?: (value: boolean) => void
    ) {
        return await axios
            .get(url, { params: params })
            .then((response) => {
                return response;
            })
            .catch((e) => {
                return e.message;
            })
            .finally(() => {
                if (stateLoading) stateLoading(false);
            });
    }
    async axiosQueryPut(
        data: object | FormData,
        url: string,
        stateLoading?: (value: boolean) => void
    ) {
        return await axios
            .put(url, data)
            .then((response) => {
                return response;
            })
            .catch((e) => {
                return e.message;
            })
            .finally(() => {
                if (stateLoading) stateLoading(false);
            });
    }
    async axiosQueryDelete(
        params: object,
        url: string,
        stateLoading?: (value: boolean) => void
    ) {
        return await axios
            .delete(url, { params: params })
            .then((response) => {
                return response;
            })
            .catch((e) => {
                return e.message;
            })
            .finally(() => {
                if (stateLoading) stateLoading(false);
            });
    }
}

const axiosQuery = new AxiosQuery();
export default axiosQuery;
