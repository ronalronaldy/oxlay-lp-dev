import { deriveKey } from "./deriveKey";
import { bytesToBase64 } from "./base64";
import { ITERATIONS } from "./constants";

export async function encryptData(data, password) {
  const encoder = new TextEncoder();

  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));

  const key = await deriveKey(
    password,
    bytesToBase64(salt)
  );

  const encrypted = await crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv,
    },
    key,
    encoder.encode(JSON.stringify(data))
  );

  return {
    v: 1,
    alg: "AES-GCM",
    kdf: "PBKDF2",
    iter: ITERATIONS,
    salt: bytesToBase64(salt),
    iv: bytesToBase64(iv),
    data: bytesToBase64(encrypted),
  };
}