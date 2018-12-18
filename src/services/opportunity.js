import { NoAuthorization, Authorization } from './config'

export default class OpportunityService {

    static createOpportunity = (latitude, longitude , city , amount , desc1 , desc2  , desc3 , price) => {
        return Authorization.post(
            'opportunity',
            {'latitude': latitude, 'longitude' : longitude , 'city' : city ,'count':amount , 'desc1':desc1 , 'desc2':desc2  , 'desc3':desc3 , 'price ':price}
        )
    }

    static getMyOpportunities = () => { //only AuthSession header needed. [AuthSession=token]
        return Authorization.get(
            'company/opportunity'
        )
    }

    static getMyOpportunityAt = (index) => { //it takes path parameter and header [AuthSession=token]
        return Authorization.get(
            'company/opportunity/' + index
        )
    }

    static deleteOpportunity = (index) => { //delete opportunity at this index. takes path parameter and header [AuthSession=token]
        return Authorization.delete(
            'company/opportunity/' + index
        )
    }


}