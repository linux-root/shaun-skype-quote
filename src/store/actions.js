import axios from 'axios'
import router from '../router'
import Vue from 'vue'
import {
  LOGIN,
    LOGIN_SUCCESS,
    LOGOUT,
    LOGOUT_SUCCESS,
    FETCH_USER_DATA,
    FETCH_USER_DATA_SUCCESS
} from './mutation-types'

import * as config from '../config'

/**
 * @return {string}
 */
const MAIN_URL = function(main_thread){
    return  "https://bn2-client-s.gateway.messenger.live.com/v1/users/ME/conversations/" + main_thread + "/messages";
}


const HEADER = function(token){
    return {Pragma: 'no-cache',
        BehaviorOverride: 'redirectAs404',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
        ClientInfo: 'os=Windows; osVer=10; proc=Win32; lcid=en-us; deviceType=1; country=VN; clientName=skype.com; clientVer=908/1.125.0.40//skype.com',
        ContextId: 'tcid=154106234507527156',
        RegistrationToken: token,
        Accept: 'application/json, text/javascript',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Content-Type': 'application/json',
        Origin: 'https://web.skype.com',
        Expires: '0',
        Referer: 'https://web.skype.com/en/',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9'}
}

﻿const skypeDataStandard = function (data) {
    let content = `<quote author=\"${data.author}\" authorname=\"${data.authorname}\" conversation=\"${data.conversation}\" timestamp=\"${data.timestamp}\">
<legacyquote>[${data.time_format}] ${data.authorname}:</legacyquote>${data.msg}
<legacyquote>\r\n\r\n&lt;&lt;&lt; </legacyquote>
</quote>`
    return {
        content : content,
        messagetype: 'RichText',
        contenttype: 'text',
        'Has-Mentions': false,
        imdisplayname: data.imdisplayname,
        clientmessageid: data.clientmessageid
    }
}




export const driverAction = {
    login({commit}, data) {
        console.log(HEADER(data.token))
        console.log(skypeDataStandard(data))
        commit(LOGIN);
        const options = {
            method: 'POST',
            headers: HEADER(data.token),
            data: skypeDataStandard(data),
            url: MAIN_URL(data.conversation),
        };
        axios(options).then(response => {
            commit(LOGIN_SUCCESS, response.data);
            Vue.swal('Fake thành công');
        }, error => {
            Vue.swal('dis, error');
        })
    }
};