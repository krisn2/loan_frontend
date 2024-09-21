import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
const url = process.env.REACT_APP_API_URL || "http://localhost:5000";

const AdminDashboard = () => {
  const { user } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${url}/getdata`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`, // Send token with request
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(`${url}/download`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`, // Send token with request
        },
      });

      if (!response.ok) {
        throw new Error("Failed to download file");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "applications.xlsx"; // Filename for the downloaded file
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url); // Clean up the URL object
    } catch (error) {
      setError(error.message);
    }
  };
  const handleDelete = async (index) => {
    try {
      const response = await fetch(`${url}/delete/${index}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`, // Include the token if necessary
        },
      });

      if (!response.ok) throw new Error("Failed to delete item");

      // Remove the deleted item from the local state after deletion
      setData(data.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className="text-center text-3xl text-violet-400 mt-5">
        Admin Dashboard
      </h1>
      <div className="mt-5 flex justify-center bg-black text-white text-center p-5">
        <button
          onClick={handleDownload}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Download
          </span>
        </button>
        {data.length > 0 ? (
          <table className="table-auto border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="border border-gray-600 px-4 py-2">First Name</th>
                <th className="border border-gray-600 px-4 py-2">Last Name</th>
                <th className="border border-gray-600 px-4 py-2">Email</th>
                <th className="border border-gray-600 px-4 py-2">
                  Loan Amount
                </th>
                <th className="border border-gray-600 px-4 py-2">
                  Monthly Income
                </th>
                <th className="border border-gray-600 px-4 py-2">Address</th>
                <th className="border border-gray-600 px-4 py-2">Phone</th>
                <th className="border border-gray-600 px-4 py-2">
                  Loan Purpose
                </th>
                <th className="border border-gray-600 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="bg-gray-800">
                  <td className="border border-gray-600 px-4 py-2">
                    {item.firstName}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {item.lastName}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {item.email}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {item.loanAmount}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {item.income}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {item.address}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {item.phone}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {item.loanPurpose}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    <button
                      onClick={() => {
                        console.log("Item to delete:", item); // Log the whole item
                        handleDelete(index); // Pass the index here
                      }}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center">No data available.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
