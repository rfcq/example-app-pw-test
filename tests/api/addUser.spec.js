const { test, expect } = require('@playwright/test');
const { AddUserRequest } = require('../../requests/addUserRequest.js');

test('Add User successfully using API', async ({ request }) => {
    const addUserRequest = new AddUserRequest(request);
    addUserRequest.addUser();
})