import encrypted from "../data/marketplace.enc.json";

import { decryptData } from "../crypto";

export async function getMarketplaces() {
  return decryptData(
    encrypted,
    import.meta.env.VITE_SECRET_KEY
  );
}