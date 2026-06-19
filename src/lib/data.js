export const getDashboardStats = async (email) => {
  const res = await fetch(`http://localhost:8080/startups/${email}`)
  return res.json();
};