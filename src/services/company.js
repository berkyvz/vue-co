/* Axios Custom Config Begin */
import { NoAuthorization, Authorization } from './config'
/* Axios Custom Config End */

export default class CompanyService {

    static login = (email, password) => {
        return NoAuthorization.post(
            'company/login',
            {'email': email, 'password': password }
        )
    }

    static register = (company) => {
        return NoAuthorization.post(
            'company',
            company
        )
    }

    static updateProfile = (password, name, city, latitude, longitude, phone) => { //returns new token and other company infos.
        return Authorization.put(
            'company',
            {'password' : password , 'name' : name , 'city' : city , 'latitude' : latitude , 'longitude' : longitude , 'phone' : phone}
        )
    }
}
