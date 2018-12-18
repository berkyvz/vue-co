export default class Company {
    constructor(coid ,email, password, name, city, latitude, longitude, phone) {
        this.coid = coid;
        this.email = email;
        this.password = password;
        this.name = name;
        this.city = city;
        this.latitude = latitude;
        this.longitude = longitude;
        this.phone = phone;
    }
}