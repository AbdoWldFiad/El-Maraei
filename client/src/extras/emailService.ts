import emailjs from "@emailjs/browser";

export const sendEmail = async (data: any) => {
  try {
    const response = await emailjs.send(
      "service_od0i4qq", // your service ID
      "template_8pdmeoj", // your template ID
      {     
        name: data.name,
        email: data.email,
        phone: data.phone,
        business: data.business,
        message: data.message,
      },
      "uKR7iZnQnJ7Qb9Ib0" // your public key
    );

    // If emailjs returns status !== 200 → treat as error
    if (response.status !== 200) {
      throw new Error(response.text || "EmailJS returned non-200 status");
    }

    return { success: true, response };
  } catch (err) {
    return { success: false, error: err };
  }
};
