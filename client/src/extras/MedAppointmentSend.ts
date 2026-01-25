const SERVICE_ID = "service_od0i4qq";
const TEMPLATE_ID = "template_0185ig7";
const PUBLIC_KEY = "uKR7iZnQnJ7Qb9Ib0";

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
    service_id: SERVICE_ID,
    template_id: TEMPLATE_ID,
    user_id: PUBLIC_KEY,
    template_params: {
      patientName: data.patientName,
      email: data.email,
      phone: data.phone,
      department: data.department,
      appointmentDate: data.appointmentDate,
      appointmentTime: data.appointmentTime,
      notes: data.notes,
    },
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
    throw new Error(`EmailJS API error: ${res.status} - ${text}`);
  }
};
