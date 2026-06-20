export const getDashboardStats = async (email) => {
  const res = await fetch(`http://localhost:8080/startups/${email}`)
  return res.json();
};
export const getMangeOpportunities = async (id) => {
  const res = await fetch(`http://localhost:8080/opportunities/mange/${id}`) 
  return res.json();
};
export const getDetlesOpportunities = async (id) => {
  const res = await fetch(`http://localhost:8080/opportunities/${id}`) 
  return res.json();
};
export const getOpportunities = async () => {
  const res = await fetch(`http://localhost:8080/opportunities`) 
  return res.json();
};