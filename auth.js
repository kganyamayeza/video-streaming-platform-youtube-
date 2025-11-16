import firebase from './firebase';
import jwt from '../utils/jwt';

export const register = async (email, password) => {
    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const token = await userCredential.user.getIdToken();
        return { user: userCredential.user, token };
    } catch (error) {
        throw new Error(error.message);
    }
};

export const login = async (email, password) => {
    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        const token = await userCredential.user.getIdToken();
        return { user: userCredential.user, token };
    } catch (error) {
        throw new Error(error.message);
    }
};

export const logout = async () => {
    try {
        await firebase.auth().signOut();
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getCurrentUser = () => {
    return firebase.auth().currentUser;
};

export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token && jwt.verify(token);
};