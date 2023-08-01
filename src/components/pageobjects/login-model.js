import { Selector } from 'testcafe';

class Page {
    constructor () {
        this.username              = Selector('input').withAttribute('id', 'email');
        this.password              = Selector('input').withAttribute('id', 'password');
        this.loginBtn              = Selector('button').withAttribute('aria-label', 'Log in');
    }
}

export default new Page();
