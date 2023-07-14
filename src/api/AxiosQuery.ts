import axios from "axios";
const URL_SERVER = `http://192.168.1.104:5001`;
export const REG_URL = `${URL_SERVER}/registration`;
export const LOGIN_URL = `${URL_SERVER}/login`;
export const GET_INFO_USER_URL = `${URL_SERVER}/InfoUser`;
class AxiosQuery {
    async axiosQueryPost(
        data: object,
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
}

const axiosQuery = new AxiosQuery();
export default axiosQuery;
