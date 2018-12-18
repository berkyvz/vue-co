/* Vendor Libs Begin */
import axios from 'axios';
/* Vendor Libs End */

/* Custom Config Begin */
import Config from "../config/config";
/* Custom Config End */

import store from '@/store/store'

const AUTH_TOKEN = store.getters['authorization/getToken'];

export const NoAuthorization = axios.create({
    baseURL: Config.BaseUrl,
    headers: { 'Content-Type': 'application/json' }
});

export const Authorization = axios.create({
    baseURL: Config.BaseUrl,
    headers: { 'Content-Type': 'application/json' }
});

Authorization.defaults.headers.common['AuthSession'] = AUTH_TOKEN ? (AUTH_TOKEN) : ''; 
//Request atınca eklemiyor headerı. Fakat sonradan burada birşeler değiştirip save edip istek atınca çalışıyor. Sebebini anlamadım. Bu yuzden loginde ekledim tokeni ve çalıştı.