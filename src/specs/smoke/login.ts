import { ClientFunction } from 'testcafe';
import LoginPage from '../../components/pageobjects/login-model';
import { getEnvironmentalizedURL } from '../../utils/general-utils';
import 'dotenv/config'

const getTitle = ClientFunction(() => document.title);

fixture `Login workflow`
    .before(async ctx => {
    ctx.url = `${ await getEnvironmentalizedURL(process.env.ENV) }`;
    })

test('Login', async t => {
    //await waitForPageToBeReady()
    await t
        .navigateTo(t.fixtureCtx.url)
        .maximizeWindow()
        // hardcoding a wait until I can implement the above method
        .wait(5000)
        .setTestSpeed(0.8)
        // not sure why testcafe only inputs half the string  before moving to the next element
        // when I use dotenv for the user here
        .typeText(LoginPage.username, "mark.sapp.sa1@greatmindsdemo.org")
        .typeText(LoginPage.password, process.env.PASSWORD)
        .click(LoginPage.loginBtn)
        .wait(10000)
        .expect(LoginPage.schoolDashboardHeader.exists).eql(true)
        .expect(getTitle()).eql("School - Dashboard | Manage | Great Minds Digital")
});

test.skip('Testcafe skip', async t => {
    console.log('no seriously, if you see this message, something is wrong.')
});