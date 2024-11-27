import imageCompression from 'browser-image-compression';

async function compressImage(file) {
  const options = {
    maxWidthOrHeight: 500, // Устанавливаем максимальный размер изображения
    useWebWorker: true,    // Включаем использование Web Worker для оптимизации
    maxSizeMB: 1,          // Максимальный размер файла в мегабайтах
    initialQuality: 0.8    // Начальное качество изображения
  };

  try {
    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    console.error('Ошибка сжатия:', error);
    throw error;
  }
}

export default compressImage;