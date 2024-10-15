import dotenv from "dotenv";
dotenv.config();


export default {
  port: process.env.PORT,
  db_Url: process.env.DB_URL,
};
