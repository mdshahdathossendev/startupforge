import { em } from "framer-motion/client";

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
export const updateOpportunity = async (id, data) => {
  const res = await fetch(
    `http://localhost:8080/opportunities/${id}`,
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
    `http://localhost:8080/opportunities/${id}`,
    {
      method: "DELETE",
    }
  );

  return await res.json();
};
export const deleteStartup = async (email) => {
  const res = await fetch(
    `http://localhost:8080/startups/${email}`,
    {
      method: "DELETE",
    }
  );

  return await res.json();
};