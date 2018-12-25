import axios from 'axios'
import router from '../router'
import Vue from 'vue'
import {
  LOGIN,
    LOGIN_SUCCESS,
    LOGOUT,
    LOGOUT_SUCCESS,
    FETCH_CONVERSATIONS,
    FETCH_CONVERSATIONS_SUCCESS,
    REACT,
    REACT_SUCCESS
} from './mutation-types'

import * as config from '../config'

/**
 * @return {string}
 */
const MAIN_URL = function(main_thread){
    return  "https://bn2-client-s.gateway.messenger.live.com/v1/users/ME/conversations/" + main_thread + "/messages";
}

const fetchConversationsURL = 'https://bn2-client-s.gateway.messenger.live.com/v1/users/ME/conversations';
const emoticonURL = function (conversation, messageId) {
    return `https://bn2-client-s.gateway.messenger.live.com/v1/users/ME/conversations/${encodeURI(conversation)}/messages/${messageId}/properties?name=emotions`
}

export function HEADER_WITH_SAVED_TOKEN(){
    let token = JSON.parse(localStorage.getItem('token'));
    let registrationToken = token.registrationToken
    return HEADER(registrationToken)
}


 function HEADER(registrationToken){
    return {Pragma: 'no-cache',
        BehaviorOverride: 'redirectAs404',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
        ClientInfo: 'os=Windows; osVer=10; proc=Win32; lcid=en-us; deviceType=1; country=VN; clientName=skype.com; clientVer=908/1.125.0.40//skype.com',
        ContextId: 'tcid=154106234507527156',
        RegistrationToken: registrationToken,
        Accept: 'application/json, text/javascript',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Content-Type': 'application/json',
        Origin: 'https://web.skype.com',
        Expires: '0',
        Referer: 'https://web.skype.com/en/',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9'}
}

﻿let skypeDataStandard = function (data) {
    let content = `<quote author=\"${data.author}\" authorname=\"${data.authorname}\" conversation=\"${data.conversation}\" timestamp=\"${data.timestamp}\">
<legacyquote>[${data.time_format}] ${data.authorname}:</legacyquote>${data.msg}
</quote>`
    return {
        content : content,
        messagetype: 'RichText',
        contenttype: 'text',
        'Has-Mentions': false,
        imdisplayname: data.imdisplayname,
        clientmessageid: new Date().getMilliseconds()
    }
}

const createFetchConversationAxiosRequestOptions = function (token) {
    let queryParam = {
        syncState: token.syncState,
        pageSize: 100,
        view: 'msnp24Equivalent'
    }
    return {
        method: 'GET',
        headers: HEADER(token.registrationToken),
        params: queryParam,
        url: fetchConversationsURL
    }
}

function sendReactRequest(method, payload){
    let token = JSON.parse(localStorage.getItem('token'));
    let registrationToken = token.registrationToken
    const options = {
        method: method,
        headers: HEADER(registrationToken),
        data: createEmoticon(payload.emoticon),
        url: emoticonURL(payload.conversationId, payload.messageId),
    };
    axios(options).then(response => {
        let action = method === 'DELETE' ? 'removed ' : ''
        Vue.swal(`${action}${payload.emoticon}`)
    })
}

const createEmoticon = function(emoticonName){
 return  {"emotions":`{\"key\":\"${emoticonName}\"}`}
}


export const trollAction = {
    login({commit}, token){
        let requestOptions = createFetchConversationAxiosRequestOptions(token);
        axios(requestOptions).then(response => {
            let data = token
            data.conversations = response.data.conversations
            commit(LOGIN_SUCCESS, data);
            router.push('/')
        }).catch(error => {
            Vue.swal(' Méo được!', 'Hãy tìm hiểu tại sao', 'error')
        })
    },

    fuck({commit}, data) {
        let token = JSON.parse(localStorage.getItem('token'));
        let registrationToken = token.registrationToken
        commit(LOGIN);
        const options = {
            method: 'POST',
            headers: HEADER(registrationToken),
            data: skypeDataStandard(data),
            url: MAIN_URL(data.conversation),
        };
        console.log(options)
        axios(options).then(response => {
            commit(LOGIN_SUCCESS, response.data);
            Vue.swal('F*** (fake) thành công', '', 'success');
        }, error => {
            Vue.swal('Dis, error', 'Hãy tìm hiểu tại sao', 'error');
        })
    },
    react({commit}, payload){
      sendReactRequest('PUT', payload)
    },
    removeReact({commit}, payload){
        sendReactRequest('DELETE', payload)
    }
    ,
    fetchConversations({commit}){
        commit(FETCH_CONVERSATIONS)
        let token = JSON.parse(localStorage.getItem('token'))
        let requestOptions = createFetchConversationAxiosRequestOptions(token)
        console.log(requestOptions)
        axios(requestOptions).then(response =>{
            commit(FETCH_CONVERSATIONS_SUCCESS, response.data.conversations)
        })
    }
    }
;