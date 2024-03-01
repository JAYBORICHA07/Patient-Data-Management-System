export const checkUser = () => {
    const user = JSON.parse(localStorage.getItem('user')!)
    return user;
}

export const getToken = () => {
    const user = JSON.parse(localStorage.getItem('user')!)
    return user.token;
}