import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { IconDownload } from '@tabler/icons';

export default function Resume() {

    const handleDownload = async () => {
        try {
            const response = await axios.post('https://remarkable-unity-production.up.railway.app/v1/main/create-pdf', {
                status: "Semua",
                submittedOn: "12-Jul-2024",
                branchCode: "301"
            }, {
                responseType: 'blob' // This will ensure the response is treated as a file
            });

            if (response.data) {
                // Create a URL for the blob and trigger a download
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'CV.pdf'); // Set the file name
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);

                console.log('File downloaded successfully');
            } else {
                console.error('No data found in the response');
            }
        } catch (error) {
            console.error('Error downloading the file', error);
        }
    };

    return (
        <Button
            fullWidth
            color="primary"
            variant="outlined"
            startIcon={<IconDownload />}
            onClick={handleDownload}
        >
            Download CV
        </Button>
    );
}
