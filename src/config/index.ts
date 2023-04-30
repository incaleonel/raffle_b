import dotenv from 'dotenv';

const envFound = dotenv.config();

if(envFound.error)
    throw new Error('Could not find .env files');

export default {
    port: process.env.PORT || 8080
}