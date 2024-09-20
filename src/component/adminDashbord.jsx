import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const s = {
      secret: "admin_logged_in",
    };
    try {
      const response = await fetch("http://localhost:5000/getdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(s),
      });
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
  <h1 className='text-center text-3xl text-violet-400 mt-5'>Admin Dashboard</h1>
  <div className="mt-5 flex justify-center bg-black text-white text-center p-5">
    {loading ? (
      <p className="text-center">Loading...</p>
    ) : error ? (
      <p className="text-center text-red-500">Error: {error}</p>
    ) : data.length > 0 ? (
      <table className="table-auto border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="border border-gray-600 px-4 py-2">First Name</th>
            <th className="border border-gray-600 px-4 py-2">Last Name</th>
            <th className="border border-gray-600 px-4 py-2">Email</th>
            <th className="border border-gray-600 px-4 py-2">Loan Amount</th>
            <th className="border border-gray-600 px-4 py-2">Address</th>
            <th className="border border-gray-600 px-4 py-2">Phone</th>
            <th className="border border-gray-600 px-4 py-2">Loan Purpose</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-gray-800">
              <td className="border border-gray-600 px-4 py-2">{item.firstName}</td>
              <td className="border border-gray-600 px-4 py-2">{item.lastName}</td>
              <td className="border border-gray-600 px-4 py-2">{item.email}</td>
              <td className="border border-gray-600 px-4 py-2">{item.loanAmount}</td>
              <td className="border border-gray-600 px-4 py-2">{item.address}</td>
              <td className="border border-gray-600 px-4 py-2">{item.phone}</td>
              <td className="border border-gray-600 px-4 py-2">{item.loanPurpose}</td>
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
