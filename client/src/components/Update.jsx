import React, { useState } from 'react';
import axios from 'axios';

const UpdateSubmission = ({ submission }) => {
  const [formData, setFormData] = useState({
    name: submission.name,
    email: submission.email,
    message: submission.message,
    selectedOption: submission.selectedOption
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/form/${submission._id}`, formData);
      alert('Submission updated successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to update submission. Please try again.');
    }
  };

  return (
    <div>
      <h2>Update Submission</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for name, email, message, and selected option */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateSubmission;
