import { getDoctorImage } from "@/extras/doctorImages";

export type LocalizedString = {
  en: string;
  ar: string;
};

export type Schedule = {
  day_ar: string;
  day_en: string;
  time: string;
  end: string;
};

export type Doctor = LocalizedString & {
  image?: string;
  price?: number;
  schedule?: Schedule[];
};

export type Department = LocalizedString & {
  desc: LocalizedString;
  doctors: Doctor[];
};

export const getDepartments = async (): Promise<Department[]> => {
  try {
    const response = await fetch("/doctors.json");

    if (!response.ok) {
      throw new Error("Failed to load doctors data");
    }

    const departments = (await response.json()) as Department[];

    return departments.map((department) => ({
      ...department,
      doctors: department.doctors.map((doctor) => ({
        ...doctor,
        image: doctor.image
          ? getDoctorImage(doctor.image)
          : undefined,
      })),
    }));
  } catch (error) {
    console.error("Error loading departments:", error);
    return [];
  }
};