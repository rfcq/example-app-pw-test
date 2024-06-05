exports.AddUser = class AddUser {

    constructor(page) {
        this.page = page;
        this.nameField = page.locator('#name');
        this.surnameField = page.locator('#surname');
    }

    async fillNameField(text) {
        await this.nameField.fill(text);
    }

    async fillSurnameField(text) {
        await this.surnameField.fill(text);
    }
}