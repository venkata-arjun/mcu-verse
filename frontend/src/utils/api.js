const API_BASE = import.meta.env.VITE_API_BASE;

export const apiRequest = async (url, options = {}) => {
  const res = await fetch(`${API_BASE}${url}`, {
    credentials: "include", // IMPORTANT for cookies
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};
