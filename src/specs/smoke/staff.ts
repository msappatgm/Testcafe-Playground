import { ClientFunction } from 'testcafe';
import LoginPage from '../../components/pageobjects/login-model';
import DashboardPage from '../../components/pageobjects/dashboard-model';
import StaffPage from '../../components/pageobjects/staff-model';
import { getEnvironmentalizedURL } from '../../utils/general-utils';
import 'dotenv/config'

const getTitle = ClientFunction(() => document.title);

fixture `Staff`
    .before(async ctx => {
    ctx.url = `${ await getEnvironmentalizedURL(process.env.ENV) }`;
    // this should really just be a util method
    }).meta('smoke related tests', true)

test('Hover links are present for staff members', async t => {
    await t
        .navigateTo(t.fixtureCtx.url)
        .maximizeWindow()
        .wait(5000)
        //.setTestSpeed(0.8)
        .typeText(LoginPage.username, "mark.sapp.sa1@greatmindsdemo.org")
        .typeText(LoginPage.password, process.env.PASSWORD)
        .click(LoginPage.loginBtn)
        .wait(10000)
        .expect(LoginPage.schoolDashboardHeader.exists).eql(true)

        .click(DashboardPage.staffBtn)
        .wait(5000)
        .expect(getTitle()).eql("School - Staff | Manage | Great Minds Digital")
        .expect(StaffPage.staffHeader.exists).eql(true)
        .hover(StaffPage.staffKebab)
        .expect(StaffPage.viewDetailsBtn.textContent).eql('View Details')
        .expect(StaffPage.editBtn.textContent).eql('Edit')
        .expect(StaffPage.resetPasswordBtn.textContent).eql('Reset Password')
        .expect(StaffPage.addAdministratorRoleBtn.textContent).eql('Add Administrator Role')
});