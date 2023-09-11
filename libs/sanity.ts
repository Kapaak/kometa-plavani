import { createClient } from "next-sanity";

const config = {
  projectId: "sjar0r9k",
  // projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-08-20",
  useCdn: false,
};

export const client = createClient(config);
