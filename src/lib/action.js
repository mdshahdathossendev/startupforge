export const createOpportunity = async (data) => {
  const res = await fetch("http://localhost:8080/startups", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
export const createStartups = async (data) => {
  const res = await fetch("http://localhost:8080/opportunities", {
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
    `http://localhost:8080/startups/${email}`,
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