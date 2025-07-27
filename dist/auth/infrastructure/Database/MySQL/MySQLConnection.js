import bd from 'mysql2/promise';
export const pool = bd.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'VETEK',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
