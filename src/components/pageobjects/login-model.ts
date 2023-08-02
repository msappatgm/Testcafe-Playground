import { Selector } from 'testcafe';

class LoginPage {
    public username;
    public password;
    public loginBtn;
    public schoolDashboardHeader;

    constructor () {
        this.username = Selector('input').withAttribute('id', 'email');
        this.password = Selector('input').withAttribute('id', 'password');
        this.loginBtn = Selector('button').withAttribute('aria-label', 'Log in');
        this.schoolDashboardHeader = Selector('h2').withAttribute('id', 'school-dashboard-heading');
    }
}

export default new LoginPage();
