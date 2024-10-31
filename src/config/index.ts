import dotenv from "dotenv";
dotenv.config();


export default {
  port: process.env.PORT,
  db_Url: process.env.DB_URL,
  salt_rounds: process.env.BCRYPT_SALT_ROUNDS
};
