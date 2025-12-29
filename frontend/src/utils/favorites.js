// Utility for managing favorites in localStorage
export function getFavoriteAvengers(email) {
  if (!email) return [];
  try {
    const data = localStorage.getItem(`fav-avengers-${email}`);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function setFavoriteAvengers(email, favorites) {
  if (!email) return;
  localStorage.setItem(
    `fav-avengers-${email}`,
    JSON.stringify(favorites || [])
  );
}
