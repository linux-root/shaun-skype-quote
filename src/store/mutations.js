import {
    FETCH_CONVERSATIONS_SUCCESS,
    FETCH_CONVERSATIONS,
    LOGIN,
    LOGIN_SUCCESS,
    LOGOUT,
    LOGOUT_SUCCESS
} from './mutation-types'


export const trollMutaion = {
    [LOGIN](state){
        state.showLoader = true;
    },
    [LOGIN_SUCCESS](state, payload){
        console.log(payload)
        state.showLoader = true;
        state.conversations = payload.conversations
        let registrationToken = payload.registrationToken
        localStorage.setItem('token', registrationToken)
    },
    [FETCH_CONVERSATIONS](state){
        state.showLoader = true;
    },
    [FETCH_CONVERSATIONS_SUCCESS](state, conversations){
        state.showLoader = false;
        state.conversations = conversations;
    }
};