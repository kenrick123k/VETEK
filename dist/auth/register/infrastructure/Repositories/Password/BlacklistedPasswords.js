import { sha1Hash } from "../../../utils/sha1Hash.js";
export class BlacklistedPasswords {
    async isNotBlacklisted(password) {
        const hash = sha1Hash(password).toUpperCase(); // Hash completo en mayúsculas
        const prefix = hash.substring(0, 5);
        const suffix = hash.substring(5);
        const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
        const data = await response.text();
        const hashes = data.split('\n').map(line => line.split(':')[0]);
        const found = hashes.some(h => h === suffix);
        return !found; // true si NO está en la blacklist, false si está
    }
}
