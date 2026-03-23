// Utils
import { getIconNames, hasIcon } from "./utils/shortcuts.js";

const DEFAULT_BASE_URL = "https://icony.dev/collections";

const fetchIconset = async ({ collectionId, baseUrl = DEFAULT_BASE_URL, ...params }) => {
  if (collectionId) {
    const url = new URL(`${baseUrl}/${collectionId}/selection.json`);

    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });

    const response = await fetch(url.toString());

    if (response.ok) {
      return response.json();
    }

    throw new Error(`icony: failed to fetch collection "${collectionId}" (${response.status})`);
  }

  throw new Error("icony: collectionId is required");
};

const Icony = { fetch: fetchIconset, getIconNames, hasIcon };

export default Icony;
