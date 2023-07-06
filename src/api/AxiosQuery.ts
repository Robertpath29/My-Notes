import axios from "axios";
export const REG_URL = `http://localhost:5001/registration`;
export const LOGIN_URL = `http://localhost:5001/login`;
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
}

const axiosQuery = new AxiosQuery();
export default axiosQuery;
