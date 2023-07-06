import axiosQuery, { LOGIN_URL } from "../api/AxiosQuery";
export async function cookieGetUser(
    userLogIn: (value: object) => void,
    routeUser: (value: string) => void,
    setUser: (value: object) => void
) {
    const saveUser = document.cookie.split("; ");
    const saveUserCookie = saveUser.find((saveUser) =>
        saveUser.startsWith("saveUser=")
    );

    if (saveUserCookie) {
        userLogIn({ userIsLogIn: true });
        const sessionValue = saveUserCookie.split("=")[1];
        const parsedResponse = JSON.parse(sessionValue);
        const user = await axiosQuery.axiosQueryPost(parsedResponse, LOGIN_URL);
        setUser({
            id: user.data.user.id,
            login: user.data.user.login,
            email: user.data.user.email,
            dataUser: [],
        });
        routeUser(`/user/${user.data.user.login}`);
    }
}
