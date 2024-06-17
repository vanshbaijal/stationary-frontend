import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
import './UserForm.css'

export default function UserForm() {

  const [formData, setFormData] = useState({
    display_name: '',
    user_uuid: '',
    total_pages: 0,
    copies: 0,
    pdf: null,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      pdf: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('display_name', formData.display_name);
    data.append('user_uuid', "3bbf852a-88ad-496e-b36d-18c9da7ad098");
    data.append('total_pages', formData.total_pages);
    data.append('copies', formData.copies);
    data.append('pdf', formData.pdf);

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/submit-form`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response from server:', response.data);
      window.alert("Form data and PDF uploaded successfully");
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h1>Upload your files here:</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" className="form-inputs" placeholder="Name" id="display_name" name="display_name" onChange={handleInputChange} />
          <input type="number" className="form-inputs" placeholder="No. of Pages" id="total_pages" name="total_pages" onChange={handleInputChange} />
          <input type="number" className="form-inputs" placeholder="No. of Copies" id="copies" name="copies" onChange={handleInputChange} />
          <input type="file" className="form-inputs" placeholder="File" id="pdf" name="pdf" onChange={handleFileChange} />
          <div>
            <button type="form-submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}