const { test, expect } = require('@playwright/test');

exports.AddUserRequest = class AddUserRequest {

    constructor(request) {
        this.request = request;
        this.BASE_URL = "http://localhost:8080";
    }

    async addUser() {
        const newUser = await this.request.post(`${this.BASE_URL}/users/register-user`, {
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                name: "Rhuan",
                surname: "Felipe",
                birthDate: "12/11/1995",
                email: "teste@Teste.com",
                phoneNumber: "83988888888"
            }
        }); 
    
        console.log(newUser.body());
        expect(newUser.ok()).toBeTruthy();
    }
}