import crypto from 'crypto'
export function sha1Hash(password: string): string{
    return crypto.createHash('sha1').update(password).digest('hex').toUpperCase()
}