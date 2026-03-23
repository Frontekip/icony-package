import { getIconNames, hasIcon } from "./utils/shortcuts.js";

const DEFAULT_BASE_URL = "https://icony.dev/collections";

const fetch_iconset = async ({ collectionId, baseUrl = DEFAULT_BASE_URL, ...params }) => {
  if (!collectionId) throw new Error("icony: collectionId is required");

  const url = new URL(`${baseUrl}/${collectionId}/selection.json`);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`icony: failed to fetch collection "${collectionId}" (${response.status})`);
  }

  return response.json();
};

const Icony = { fetch: fetch_iconset, getIconNames, hasIcon };

export default Icony;
