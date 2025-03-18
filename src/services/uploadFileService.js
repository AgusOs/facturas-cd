const API_URL = import.meta.env.API_URL;

export const uploadFileService = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
  
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      body: formData,
    });
  
    if (!response.ok) {
      throw new Error("Error al subir archivo");
    }
  
    return response.json();
  };
  