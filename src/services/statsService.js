export async function getStats() {
  const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/stats`);
  if (!res.ok) throw new Error("Failed to fetch stats");
  return res.json();
}
