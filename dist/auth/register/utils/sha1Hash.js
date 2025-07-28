import crypto from 'crypto';
export function sha1Hash(password) {
    return crypto.createHash('sha1').update(password).digest('hex').toUpperCase();
}
