export class SocialUser {
  id: string;
  name: string;
  email: string;
  provider: string;
  photoUrl: string;
  lastName: string;
  firstName: string;
  authToken: string;

  idToken: string; // Reference https://developers.google.com/identity/sign-in/web/backend-auth
  authorizationCode: string; // Reference https://developers.google.com/identity/sign-in/web/reference#googleauthgrantofflineaccessoptions

  response: any;
}
