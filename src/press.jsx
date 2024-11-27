import React, { useState } from 'react';
import compressImage from './compressImgage'; // Функция сжатия

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [compressedImageURL, setCompressedImageURL] = useState(null);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    try {
      const compressedFile = await compressImage(file);
      const compressedURL = URL.createObjectURL(compressedFile);
      setCompressedImageURL(compressedURL);
    } catch (error) {
      console.error('Ошибка обработки изображения:', error);
    }
  };

  const handleDownload = () => {
    if (compressedImageURL) {
      const link = document.createElement('a');
      link.href = compressedImageURL;
      link.download = 'compressed-image.jpg'; // Имя файла
      link.click();
      URL.revokeObjectURL(compressedImageURL);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && <p>Изображение загружено</p>}
      {compressedImageURL && (
        <div>
          <button onClick={handleDownload}>Скачать сжатое изображение</button>
          <img src={compressedImageURL} alt="Сжатое изображение" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;