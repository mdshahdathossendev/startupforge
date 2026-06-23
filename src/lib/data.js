export const getDashboardStats = async (email) => {
  const res = await fetch(`http://localhost:8080/startups/${email}`)
  return res.json();
};
export const getStats = async () => {
  const res = await fetch(`http://localhost:8080/startups`)
  return res.json();
};
export const getTangation = async () => {
  const res = await fetch(`http://localhost:8080/payment`)
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
export const getApplicationsByOpportunity = async (opportunity_id) => {
  const res = await fetch(
    `http://localhost:8080/application/${opportunity_id}`
  );
  return res.json();
};
export const getApplicantByOpportunity = async (applicant_id) => {
  const res = await fetch(
    `http://localhost:8080/application/applicant/${applicant_id}`
  );
  return res.json();
};
export const getUser = async (session_id) => {
  const res = await fetch(
    `http://localhost:8080/user/${session_id}`
  );
  return res.json();
};
export const getUserData = async () => {
  const res = await fetch(
    `http://localhost:8080/user`
  );
  return res.json();
};