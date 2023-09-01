export interface UserRegistrationForm {
  email: string;
  password: string;
  userName: string;
  firstName: string;
  lastName: string;
  address: {
    street: string;
    streetNumber: string;
    zipCode: string;
    city: string;
  };
}
