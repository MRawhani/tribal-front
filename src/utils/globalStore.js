import axios from "axios";
import { BASE_API_URL, BASE_IMAGE_URL } from "../../globalConfig";

export const globalStore = {
  staticesNumbers: {
    totalBooks: 4,
    totalReports: 7,
    totalInterviews: 4,
    totalStories: 2,
  },
  books: [],
  reports: [],
  interviews: [],
  stories: [],
};

export const fetchClientData = async () => {
  const res = await fetch(`${BASE_API_URL}/client/get-data`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const fetchSearchData = async (query) => {
  const res = await fetch(`${BASE_API_URL}/client/search?title=${query}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const fetchStoryData = async (slug) => {
  const res = await fetch(`${BASE_API_URL}/client/get-story/${slug}`, {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const submitContactUsForm = async (data) => {
  return axios.post(`${BASE_API_URL}/client/submit-form`, data);
};

export const getImageLink = (image) => {
  return `${BASE_IMAGE_URL}/${image}`;
};
