exports.CommonPage = class CommonPage {
    /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.appNavbar = page.locator('css=.navbar');
    this.usersListLink = page.locator('css=[data-testid="list-users"]');
    this.addUserLink = page.locator('css=[data-testid="add-user"]');
  }

  async gotoUsersList() {
    await this.usersListLink.click();
  }

  async gotoAddUser() {
    await this.addUserLink.click();
  }
}