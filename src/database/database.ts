//using pool for multiple connections
import {Pool} from "pg";

//using url string for connection
const config: any = {
    connectionString: process.env.DATABASE_URL,
};

config.ssl = {
    rejectUnauthorized: false
};

//pool init
const pool = new Pool(config);

export default pool;