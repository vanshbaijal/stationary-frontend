import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
import './Admin.css'

export default function Admin() {

    const [formDataList, setFormDataList] = useState([]);
      
    useEffect(() => {
        // Fetch form data from the server
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-printouts`);
                console.log(response.data);
                setFormDataList(response.data);
            } catch (error) {
                console.error('Error fetching form data:', error);
            }
        };

        fetchData();
    }, []);

    console.log(formDataList);

    const openPdfInNewTab = (pdfBuffer) => {
        const uint8Array = new Uint8Array(pdfBuffer);
        const blob = new Blob([uint8Array], { type: 'application/pdf' });
        const pdfUrl = URL.createObjectURL(blob);

        // Open PDF in a new tab
        window.open(pdfUrl, '_blank');

    };

    return (
        <div className="admin-page">
            <h2>Form Data Display</h2>
            {formDataList.map((formData) => (
                <div key={formData.uuid} className='admin-container'>
                    <p>Display Name: {formData.display_name}</p>
                    <p>Total Pages: {formData.total_pages}</p>
                    <p>Copies: {formData.copies}</p>
                    <p>PDF:</p>
                    <button onClick={() => {openPdfInNewTab(formData.pdf.data)}}>Open file</button>
                </div>
            ))}
        </div>
    )
}



