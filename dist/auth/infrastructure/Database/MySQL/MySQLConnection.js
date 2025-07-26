import bd from 'mysql2/promise';
export const pool = bd.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '12345678',
    database: 'VETEK',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
