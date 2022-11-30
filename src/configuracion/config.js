import dotenv              from 'dotenv';
import path                from 'path';
dotenv.config({
    path: path.resolve(process.cwd(), process.env.NODE_ENV + '.env')
});

export default {
    NODE_ENV:       process.env.NODE_ENV || "development",
    PORT:           process.env.PORT     || 8080,
    MONGO_DB_URI:   process.env.MONGO_DB_URI || "./src/modelos/datos",
    SELECTED_DB:    process.env.SELECTED_DB || 'file',
    PRIVATE_KEY:    process.env.PRIVATE_KEY || "mi clave secreta",
    MAIL_USER:      process.env.MAIL_USER || 'camilla.gleichner@ethereal.email',
    MAIL_PASS:      process.env.MAIL_PASS || 'G5uW8tEjyyK6ZEpKY8',
    SESSION_MAX:    process.env.SESSION_MAX || 60000
}