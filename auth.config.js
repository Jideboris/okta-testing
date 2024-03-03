export default {
  oidc: {
    clientId: '0oafi6v6cy6gGQwPS5d7',
    redirectUri: 'com.okta.dev-53163714:/callback',
    endSessionRedirectUri: 'com.okta.dev-53163714:/logout',
    discoveryUri: 'https://dev-53163714.okta.com/oauth2/default',
    scopes: ['openid', 'profile','email'],
    requireHardwareBackedKeyStore: false,
  },
};

// May consider looking at this
//Okat to support Biometric https://help.okta.com/oie/en-us/content/topics/identity-engine/authenticators/configure-okta-verify-options.htm
//https://github.com/auth0/react-native-auth0/blob/master/README.md
// https://developer.okta.com/blog/2018/03/16/build-react-native-authentication-oauth-2?_gl=1*1dmy8yu*_ga*MTM5NTA4ODgyNS4xNzA3MzgyOTEx*_ga_QKMSDV5369*MTcwNzM4MjkxMC4xLjEuMTcwNzM4Mzg4Ny40Ny4wLjA.&_ga=2.39283363.1060195374.1707382911-1395088825.1707382911
//https://developer.okta.com/docs/guides/sampleapp-oie-redirectauth/reactnativedroid/main/