import { Selector } from 'testcafe';

class DashboardPage {
    public staffBtn;

    constructor () {
        this.staffBtn = Selector('img').withAttribute('alt', 'Page card for Staff');
    }
}

export default new DashboardPage();
