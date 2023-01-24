export class Contact {
  name = "";
  lastname = "";
  email = "";
  connect = false;

  constructor (name, lastname, email, connect) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.connect = connect
  };
};
