import dotenv   from 'dotenv';
import path     from 'path';

dotenv.config({
    path: path.resolve(process.cwd(), process.env.NODE_ENV + '.env')
});

export default {
    NODE_ENV:       process.env.NODE_ENV || "development",
    PORT:           process.env.PORT     || 8080,
    MONGO_DB_URI:   process.env.MONGO_DB_URI || "./src/modelos/datos",
    SELECTED_DB:    process.env.SELECTED_DB || 'file',
    PRIVATE_KEY:    process.env.PRIVATE_KEY || "mi clave secreta"
}