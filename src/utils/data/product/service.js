import { decryptData } from "../../crypto";
import encryptedProducts from "../market-place/product.enc.json";

export async function getProducts() {
  return await decryptData(encryptedProducts, import.meta.env.VITE_SECRET_KEY);
}
