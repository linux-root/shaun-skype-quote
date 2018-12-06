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
        let token = {
            registrationToken : payload.registrationToken,
            syncState : payload.syncState
        }
        localStorage.setItem('token', JSON.stringify(token))
    },
    [FETCH_CONVERSATIONS](state){
        state.showLoader = true;
    },
    [FETCH_CONVERSATIONS_SUCCESS](state, conversations){
        state.showLoader = false;
        state.conversations = conversations;
    }
};