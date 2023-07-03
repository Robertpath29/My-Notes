import axios from "axios";
export const REG_URL = `http://localhost:5001/registration`;
export const LOGIN_URL = `http://localhost:5001/login`;
class AxiosQuery {
    async axiosQueryPost(
        data: object,
        stateLoading: (value: boolean) => void,
        url: string
    ) {
        return await axios
            .post(url, data)
            .then((response) => {
                return response;
            })
            .catch((e) => {
                return e.message;
            })
            .finally(() => {
                stateLoading(false);
            });
    }
}

const axiosQuery = new AxiosQuery();
export default axiosQuery;
