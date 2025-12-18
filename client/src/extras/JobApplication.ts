
const SERVICE_ID = "service_od0i4qq";
const TEMPLATE_ID = "template_9hi6pnj";
const PUBLIC_KEY = "uKR7iZnQnJ7Qb9Ib0"; 

type ApplicationEmailParams = {
  fullName: string;
  email: string;
  phone: string;
  jobTitle: string;
  jobId: string;
  coverLetter?: string;
  cvFileName?: string;
};

export const sendApplicationEmail = async (data: ApplicationEmailParams) => {
  const payload = {
    service_id: SERVICE_ID,
    template_id: TEMPLATE_ID,
    user_id: PUBLIC_KEY,
    template_params: {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      jobTitle: data.jobTitle,
      jobId: data.jobId,
      coverLetter: data.coverLetter,
      cvFileName: data.cvFileName,
    },
  };

  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`EmailJS API error: ${res.status} - ${text}`);
  }
};