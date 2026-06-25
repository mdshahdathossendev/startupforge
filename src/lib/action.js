
export const createOpportunity = async (data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/startups`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
export const addPaymentHistory = async (data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
export const createStartups = async (data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/opportunities`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
export const createApplication = async (data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/application`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
export const updateStartup = async (email, userData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/startups/${email}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );

  return await res.json();
};
export const updateOpportunity = async (id, data) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/opportunities/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return await res.json();
};
export const deleteOpportunity = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/opportunities/${id}`,
    {
      method: "DELETE",
    }
  );

  return await res.json();
};
export const deleteStartup = async (email) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/startups/${email}`,
    {
      method: "DELETE",
    }
  );

  return await res.json();
};
export const updateApplication = async (id, data) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/application/query/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({status: data}),
    }
  );

  return res.json();
};
export const updateProfile = async (id, data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
  return res.json();
};
export const updateStartupData = async (id, data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/startups/query/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({stats: data}),
  });

  return res.json();
};
export const deleteStartupData = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/startups/query/${id}`,
    {
      method: "DELETE",
    }
  );

  return res.json();  
};