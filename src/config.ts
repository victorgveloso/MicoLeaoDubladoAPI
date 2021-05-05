import mongoose from 'mongoose';

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_PORT = process.env.DB_PORT || 27017;
export const DB_NAME = process.env.DB_NAME || "brazilian-addon-db";
const DB_USER = process.env.DB_USER;
const DB_PSK = process.env.DB_PSK;
export const SCRAPER_API_HOST = process.env.SCRAPER_API_HOST || "https://api-siteplaceholder.herokuapp.com";
export const UNKNOWN_SIZE = 300000000;

export async function connect() {
    let CREDENTIALS = "";
    if (DB_USER && DB_PSK) CREDENTIALS = `${DB_USER}:${DB_PSK}@`;
    let mongouri = `mongodb+srv://${CREDENTIALS}${DB_HOST}:/${DB_NAME}`;
    try {
        await mongoose.connect(mongouri);
    } catch (err) {
        mongouri = `mongodb://${CREDENTIALS}${DB_HOST}:${DB_PORT}/${DB_NAME}`;
        try {
            await mongoose.connect(mongouri);
        } catch (err) {
            throw new Error(`Could not connect to db 'mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}': ${err}`);
        }
    }
    return mongouri;
}