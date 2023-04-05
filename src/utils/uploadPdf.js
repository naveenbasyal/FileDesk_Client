export const uploadPdf = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      `${process.env.REACT_APP_CLOUDINARY_PRESET}`
    );
    const res = await fetch(`${process.env.REACT_APP_CLOUDINARY_URL}`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data.secure_url;
  } catch (error) {
    console.log(error);
  }
};
