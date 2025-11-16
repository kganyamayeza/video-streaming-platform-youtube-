export const encodeToken = (payload, secret, options) => {
    return jwt.sign(payload, secret, options);
};

export const decodeToken = (token, secret) => {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
};

export const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
};

export const setTokenInLocalStorage = (token) => {
    localStorage.setItem('token', token);
};

export const removeTokenFromLocalStorage = () => {
    localStorage.removeItem('token');
};