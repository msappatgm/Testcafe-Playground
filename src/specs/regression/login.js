import page from '../../components/pageobjects/login-model';
import 'dotenv/config'

fixture `Login workflow`
    .page `https://digital.uat.greatminds.dev/login/email`;

test('Text typing basics', async t => {
    //await waitForPageToBeReady()
    await t
        // hardcoding a wait until I can implement the above method
        .wait(5000)
        .setTestSpeed(0.5)
        // not sure why testcafe only inputs half the string  before moving to the next element
        // when I use dotenv for the user here
        .typeText(page.username, "mark.sapp.da1@greatmindsdemo.org")
        .typeText(page.password, process.env.PASSWORD)
        .click(page.loginBtn)
});