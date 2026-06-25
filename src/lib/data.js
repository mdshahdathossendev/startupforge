export const getDashboardStats = async (email) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/startups/${email}`)
  const data = await res.json();
  return data;
};
export const getStats = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/startups`)
  const data = await res.json();
  return data;
};
export const getTangation = async (token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/payment`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
   const data = await res.json();
  return data;
};
export const getMangeOpportunities = async (id, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/opportunities/mange/${id}`,
     {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ) 
  const data = await res.json();
  return data;
};
export const getDetlesOpportunities = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/opportunities/${id}`) 
  return res.json();
};
export const getOpportunities = async (page) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/opportunities?page=${page}`
  );
  return res.json();
};
export const getApplicationsByOpportunity = async (opportunity_id, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/application/${opportunity_id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();
  return data;
};
export const getApplicantByOpportunity = async (applicant_id, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/application/applicant/${applicant_id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();
  return data;
};
export const getUser = async (session_id, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/${session_id}`,
    {
       headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
 const data = await res.json();
  return data;
};
export const getUserData = async (token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user`,
    {
       headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
 const data = await res.json();
  return data;
};

export const getStatsDetls = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/startups/new/${id}`)
  const data = await res.json();
  return data;
};