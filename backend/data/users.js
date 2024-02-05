import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Edwin Wanjuki",
    email: "edwin@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Eric Nderitu",
    email: "eric@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
