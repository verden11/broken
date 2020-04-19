interface providerData {
  displayName: any;
  email: string;
  phoneNumber: any;
  photoURL: any;
  providerId: string;
  uid: string;
}

export interface IUser {
  displayName: any;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: { creationTime: number; lastSignInTime: number };
  phoneNumber: any;
  photoURL: any;
  providerData: [providerData];
  providerId: string;
  uid: string;
}
