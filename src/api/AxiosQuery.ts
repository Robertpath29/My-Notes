import axios from "axios";
const REG_URL = `http://localhost:5001/registration`;
class AxiosQuery {
    async createUser(data: object, setLoading: (value: boolean) => void) {
        return await axios
            .post(REG_URL, data)
            .then((response) => {
                return response;
            })
            .catch((e) => {
                return e.message;
            })
            .finally(() => {
                setLoading(false);
            });
    }
}

const axiosQuery = new AxiosQuery();
export default axiosQuery;
