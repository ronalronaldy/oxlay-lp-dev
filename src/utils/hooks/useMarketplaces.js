import { useEffect, useState } from "react";

import { getMarketplaces } from "../services/marketplaceService";

export function useMarketplaces() {
  const [marketplaces, setMarketplaces] = useState([]);

  useEffect(() => {
    getMarketplaces().then(setMarketplaces);
  }, []);

  return marketplaces;
}