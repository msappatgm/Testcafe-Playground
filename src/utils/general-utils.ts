export const getEnvironmentalizedURL = async (env: string) => {
    if(env === 'PROD') {
        return 'https://digital.greatminds.org'
    } else {
        return `https://digital.${ env.toLowerCase() }.greatminds.dev/login/email`
    }
}