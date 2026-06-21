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
export const createApplication = async (data) => {
  const res = await fetch("http://localhost:8080/application", {
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
export const updateApplication = async (id, data) => {
  const res = await fetch(
    `http://localhost:8080/application/query/${id}`,
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
  const res = await fetch(`http://localhost:8080/user/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};
export const updateStartupData = async (id, data) => {
  const res = await fetch(`http://localhost:8080/startups/query/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({stats: data}),
  });

  return res.json();
};