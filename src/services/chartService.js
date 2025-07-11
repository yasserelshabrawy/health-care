export async function getChartData() {
  const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/chartData`);
  if (!res.ok) throw new Error("Failed to fetch chart data");
  return res.json();
}