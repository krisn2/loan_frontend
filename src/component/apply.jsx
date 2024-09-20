import React, { useState } from "react";

const apply = () => {
  const [formData, setFormData] = useState({
    email: "",
    loanAmount: "",
    address: "",
    income: "",
    firstName: "",
    lastName: "",
    phone: "",
    whatsapp: "",
    maritalStatus: "",
    gender: "",
    loanPurpose: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        alert("Application submitted successfully!");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div className=" mb-10">
      <div className="text-center font-sans font-bold text-3xl m-20 text-violet-400">
        <h1>APPLY</h1>
      </div>
      <div className="flex justify-center">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div>
            <label
              for="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div>
            <label
              for="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Loan Amount
            </label>
            <input
              type="text"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleInputChange}
              required
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="mb-5">
            <label
              for="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address :
            </label>
            <input
              type="textarea"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div>
            <label
              for="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              monthly income
            </label>
            <input
              type="text"
              name="income"
              value={formData.income}
              onChange={handleInputChange}
              required
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div>
            <label
              for="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              first name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div>
            <label
              for="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              last name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div>
            <label
              for="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              phone
            </label>
            <input
              type="tel"
              name="phone"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div>
            <label
              for="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              whatsapp
            </label>
            <input
              type="tel"
              name="whatsapp"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              value={formData.whatsapp}
              onChange={handleInputChange}
              required
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div class="relative z-0 w-full mb-5 group">
            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleInputChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            >
              <option value="" className="text-gray-900">
                Choose Marital Status
              </option>
              <option value="single" className="text-gray-900">
                Single
              </option>
              <option value="married" className="text-gray-900">
                Married
              </option>
              <option value="divorced" className="text-gray-900">
                Divorced
              </option>
              <option value="widow" className="text-gray-900">
                Widow
              </option>
              <option value="widower" className="text-gray-900">
                Widower
              </option>
              <option value="separated" className="text-gray-900">
                Separated
              </option>
            </select>
          </div>
          <div className="relative z-0 w-full mb-5 group mt-5">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            >
              <option value="" className="text-gray-900">
                Choose Gender
              </option>
              <option value="male" className="text-gray-900" name="gender">
                Male
              </option>
              <option value="female" className="text-gray-900" name="gender">
                Female
              </option>
              <option value="other" className="text-gray-900" name="gender">
                Other
              </option>
            </select>
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Gender
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <select
              name="loanPurpose"
              value={formData.loanPurpose}
              onChange={handleInputChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            >
              <option value="" className="text-gray-900">
                Choose Loan Purpose
              </option>
              <option
                value="education"
                className="text-gray-900"
                name="loanPurpose"
              >
                Education
              </option>
              <option value="home" className="text-gray-900" name="loanPurpose">
                Home
              </option>
              <option
                value="personal"
                className="text-gray-900"
                name="loanPurpose"
              >
                Personal
              </option>
              <option
                value="business"
                className="text-gray-900"
                name="loanPurpose"
              >
                Business
              </option>
              <option
                value="other"
                className="text-gray-900"
                name="loanPurpose"
              >
                Gold
              </option>
              <option
                value="other"
                className="text-gray-900"
                name="loanPurpose"
              >
                Car
              </option>
              <option
                value="other"
                className="text-gray-900"
                name="loanPurpose"
              >
                LRD
              </option>
              <option
                value="other"
                className="text-gray-900"
                name="loanPurpose"
              >
                Machiniry
              </option>
              <option
                value="other"
                className="text-gray-900"
                name="loanPurpose"
              >
                Equipement
              </option>
              <option
                value="other"
                className="text-gray-900"
                name="loanPurpose"
              >
                Other
              </option>
            </select>
            <label
              for="floating_purpose"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Loan Purpose
            </label>
          </div>
          <button
            type="submit"
            value="Submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default apply;
