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
  const res = await fetch(process.env.BASE_API_URL + "client/get-data");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const fetchStoryData = async (slug) => {
  const res = await fetch(`${process.env.BASE_API_URL}client/get-story/${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }


  return res.json();
};

export const getImageLink = (image) => {
 return `https://tribal-api.onrender.com/images/${image}` 
}
