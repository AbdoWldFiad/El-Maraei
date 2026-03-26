export type ContactEmailParams = {
  name: string;
  email: string;
  phone: string;
  business?: string;
  message: string;
};
export const sendEmail = async (data: ContactEmailParams) => {
  const payload = {
    service_id: process.env.EMAILJS_SERVICE_ID,
    template_id: process.env.EMAILJS_TEMPLATE_CONTACT,
    user_id: process.env.EMAILJS_PUBLIC_KEY,
    // accessToken: process.env.EMAILJS_PRIVATE_KEY,
    template_params: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      business: data.business,
      message: data.message,
    },
  };

  const res = await fetch(
    "https://api.emailjs.com/api/v1.0/email/send",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`EmailJS error: ${res.status} - ${text}`);
  }

  return { success: true };
};