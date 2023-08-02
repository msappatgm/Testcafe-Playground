import { Selector } from 'testcafe';

class StaffPage {
    public staffHeader
    public staffKebab;
    public viewDetailsBtn;
    public editBtn;
    public resetPasswordBtn;
    public addAdministratorRoleBtn

    constructor () {
        this.staffHeader = Selector('h2').withAttribute('id', 'school-staff-header');
        this.staffKebab = Selector('button').withAttribute('id', 'school-staff-kebob-0').nth(0);
        this.viewDetailsBtn = Selector('button').withAttribute('id', 'view-details-teacher-0');
        this.editBtn = Selector('button').child('span').withText('Edit');
        this.resetPasswordBtn = Selector('button').child('span').withText('Reset Password');
        this.addAdministratorRoleBtn = Selector('button').child('span').withText('Add Administrator Role');
    }
}

export default new StaffPage();
