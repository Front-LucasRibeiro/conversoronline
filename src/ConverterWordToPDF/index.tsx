import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import mammoth from 'mammoth';

const Converter: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0] || null;
        if (selectedFile) {
            setFile(selectedFile);
            setError(null);
        }
    };

    const convertToPDF = async () => {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (event: ProgressEvent<FileReader>) => {
            const arrayBuffer = event.target?.result;
            if (arrayBuffer instanceof ArrayBuffer) {
                try {
                    const { value: text } = await mammoth.extractRawText({ arrayBuffer });
                    const pdf = new jsPDF();
                    pdf.text(text, 10, 10);
                    pdf.save('document.pdf');
                } catch (error) {
                    console.error(error);
                    setError("Erro ao converter o arquivo Word para PDF. Tente novamente.");
                }
            }
        };
        reader.readAsArrayBuffer(file);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Conversor Word para PDF</h1>
            <input 
                type="file" 
                accept=".docx" 
                onChange={handleFileChange} 
                style={{ margin: '10px' }}
            />
            <br />
            <button 
                onClick={convertToPDF} 
                disabled={!file}
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                Converter
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Converter;