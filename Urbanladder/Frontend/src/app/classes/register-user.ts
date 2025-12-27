export class RegisterUser {
  constructor(
    public fname: string,
    public lname: string,
    public email: string,
    public phonenumber: number,
    public username: string,
    public password: string,
    public usertype: string
  ) {}
}