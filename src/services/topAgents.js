export async function getTopAgents() {
  const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/topAgents`);
  if (!res.ok) throw new Error("Failed to fetch top agents");
  return res.json();
}