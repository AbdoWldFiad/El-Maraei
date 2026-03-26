
export type JobApplicationEmailParams = {
  fullName: string;
  email: string;
  phone: string;
  jobTitle: string;
  jobId: string;
  coverLetter?: string;
  cvFilePath?: string;
};

export const sendJobApplicationEmail = async (
  data: JobApplicationEmailParams
) => {
  const payload = {
    service_id: process.env.EMAILJS_SERVICE_ID,
    template_id: process.env.EMAILJS_TEMPLATE_JOB,
    user_id: process.env.EMAILJS_PUBLIC_KEY,
    //accessToken: process.env.EMAILJS_PRIVATE_KEY
    template_params: {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      jobTitle: data.jobTitle,
      jobId: data.jobId,
      coverLetter: data.coverLetter,
      cvFilePath: data.cvFilePath,
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
    throw new Error(`EmailJS error: ${res.status} - ${text}`);
  }
};