import { base64ToBytes } from './base64';

export async function deriveKey(password, salt, iterations) {
  const encoder = new TextEncoder();

  const passwordKey = await window.crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveKey'],
  );

  return await window.crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: base64ToBytes(salt),
      iterations,
      hash: 'SHA-256',
    },
    passwordKey,
    {
      name: 'AES-GCM',
      length: 256,
    },
    false,
    ['encrypt', 'decrypt'],
  );
}