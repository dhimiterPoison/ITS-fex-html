import { Injectable } from '@angular/core';
const CLIENT_ID =  "1050314840809-k4ejm93vum2hg99ncnq61gb3uof0se20.apps.googleusercontent.com";
const API_KEY = "AIzaSyBo55YJ-S0MKeDWQVY3DrFIQ5ovUAXdCjo";
const DISCOVERY_DOCS = [ "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/drive";


@Injectable({
  providedIn: 'root'
})
export class GapiSessionService {
  googleAuth: gapi.auth2.GoogleAuth;
  user: gapi.auth2.GoogleUser;

  constructor() { }

  initClient = () => {
    return new Promise((resolve, reject) => {
      gapi.load("client:auth2", () => {
        return gapi.client
          .init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
          })
          .then(() => {
            this.googleAuth = gapi.auth2.getAuthInstance();
            resolve();
          });
      });
    });
  }
  get isSignedIn(): boolean {
    return this.googleAuth.isSignedIn.get();
  }

  signIn() {
    return this.googleAuth
      .signIn({
        prompt: "consent"
      })
      .then((googleUser: gapi.auth2.GoogleUser) => {
        this.user = googleUser;
      });
  }

  signOut(): void {
    this.googleAuth.signOut();
  }
}
