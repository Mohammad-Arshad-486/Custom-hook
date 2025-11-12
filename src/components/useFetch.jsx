import { useState, useEffect } from "react";

function useFetch() {
  const API_URL = "https://6912c0b452a60f10c822924e.mockapi.io/UserDetail";
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // READ
  async function fetchData() {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Network error");
      const result = await res.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    }
  }

  // CREATE
  async function addData(newItem) {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });
      const result = await res.json();
      setData((prev) => [...prev, result]);
    } catch (err) {
      setError(err.message);
    }
  }

  // UPDATE
  async function updateData(id, updatedItem) {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedItem),
      });
      const result = await res.json();
      setData((prev) =>
        prev.map((item) => (item.id === id ? result : item))
      );
    } catch (err) {
      setError(err.message);
    }
  }

  // DELETE
  async function deleteData(id) {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, addData, updateData, deleteData, refetch: fetchData };
}

export default useFetch;
