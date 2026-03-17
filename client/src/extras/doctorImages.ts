export const doctorImages = import.meta.glob("@assets/Doctors/*.{png,jpg,jpeg}", { eager: true, as: "url" });

export function getDoctorImage(filename: string): string {
  const key = Object.keys(doctorImages).find((path) =>
    path.endsWith(filename)
  );
  return key ? doctorImages[key] : doctorImages["@assets/Doctors/fallback.png"];
}