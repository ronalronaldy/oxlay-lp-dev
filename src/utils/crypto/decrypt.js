import { deriveKey } from './deriveKey';
import { base64ToBytes } from './base64';

export async function decryptData(encrypted, password) {

  const key = await deriveKey(password, encrypted.salt, encrypted.iter);

  const encryptedBytes = base64ToBytes(encrypted.data);
  const iv = base64ToBytes(encrypted.iv);

  const decrypted = await window.crypto.subtle.decrypt(
    {
      name: encrypted.alg,
      iv,
    },
    key,
    encryptedBytes,
  );

  return JSON.parse(new TextDecoder().decode(decrypted));
}
