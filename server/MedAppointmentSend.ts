import fetch from "node-fetch";

export type AppointmentEmailParams = {
  patientName: string;
  email: string;
  phone: string;
  department: string;
  appointmentDate: string;
  appointmentTime: string;
  notes?: string;
};

export const sendAppointmentEmail = async (
  data: AppointmentEmailParams
) => {
  const payload = {
    service_id: process.env.EMAILJS_SERVICE_ID,
    template_id: process.env.EMAILJS_TEMPLATE_APPOINTMENT,
    user_id: process.env.EMAILJS_PUBLIC_KEY,
    //accessToken: process.env.EMAILJS_PRIVATE_KEY
    template_params: data,
  };

  const res = await fetch(
    "https://api.emailjs.com/api/v1.0/email/send",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`EmailJS error: ${res.status} - ${text}`);
  }
};