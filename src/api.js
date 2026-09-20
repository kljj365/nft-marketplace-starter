import axios from "axios";

// FES NFT Marketplace API — every component fetches through here so the base
// URL and the shape of a call live in one place.
const BASE = "https://us-central1-nft-cloud-functions.cloudfunctions.net";

export const api = axios.create({ baseURL: BASE });

export const getHotCollections = () => api.get("/hotCollections").then((r) => r.data);
export const getNewItems = () => api.get("/newItems").then((r) => r.data);
export const getTopSellers = () => api.get("/topSellers").then((r) => r.data);
// filter: undefined | "price_low_to_high" | "price_high_to_low" | "likes_high_to_low"
export const getExplore = (filter) =>
  api.get("/explore", { params: filter ? { filter } : {} }).then((r) => r.data);
export const getAuthor = (authorId) =>
  api.get("/authors", { params: { author: authorId } }).then((r) => r.data);
export const getItemDetails = (nftId) =>
  api.get("/itemDetails", { params: { nftId } }).then((r) => r.data);
