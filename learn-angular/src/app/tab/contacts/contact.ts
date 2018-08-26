export class Contact {
  private readonly phoneNumber: string;
  private readonly email: string;

  constructor(phoneNumber, email) {
    this.phoneNumber = phoneNumber;
    this.email = email;
  }


  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  getEmail(): string {
    return this.email;
  }
}
