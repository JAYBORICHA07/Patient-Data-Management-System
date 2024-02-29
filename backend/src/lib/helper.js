import bcrypt from "bcrypt";
const saltRound = 10;

const encrypt = {
  generatedPassword: (password) => {
    return new Promise((resolve, reject) => {
      try {
        resolve(bcrypt.hashSync(password, bcrypt.genSaltSync(saltRound)));
      } catch (error) {
        reject(error);
      }
    });
  },
  comparePassword: (plainPassword, hashedPassword) => {
    return new Promise((resolve, reject) => {
      try {
        resolve(bcrypt.compareSync(plainPassword, hashedPassword));
      } catch (error) {
        reject(error);
      }
    });
  },
};

export default encrypt;
