import server from "./index.js";
import dotenv from "dotenv";
dotenv.config();
import dbConnection from "./config/db.config.js";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await dbConnection();
    server.listen(PORT, () => {
      console.log(`🚀Server is listening on ${PORT}`);
    });
  } catch (error) {
    console.error("Can not conect to DB❌ ");
  }
};

startServer();
