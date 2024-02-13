import axios from "axios";

export const yFInstance = axios.create({
  // Configuration
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
  },
});

export const holisticInstance = axios.create({
  // Configuration
  baseURL: process.env.NEXT_PUBLIC_HOLISTIC_URL,
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_HOLISTIC_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_HOLISTIC_HOST,
  },
});

export const yHInstance = axios.create({
  // Configuration
  baseURL: process.env.NEXT_PUBLIC_YH_API_URL,
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_YH_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_YH_HOST,
  },
});

export const livePreviewInstance = axios.create({
  // Configuration
  baseURL: process.env.NEXT_PUBLIC_LIVE_PREVIEW_URL,
  headers: {
    "content-type": "application/json",
    "X-Linkpreview-Api-Key": process.env.NEXT_PUBLIC_LIVE_PREVIEW_API_KEY,
  },
});
