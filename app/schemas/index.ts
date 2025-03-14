import { z } from "zod";
import validator from "validator";


export const CreateDemoSchema = z.object({
  fName: z.string().min(2, {
    message: "FIst Name must be at least 2 characters.",
  }),
  sName: z.string().min(2, {
    message: "Last must be at least 2 characters.",
  }),
  email: z.string().email().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  mobnumber: z.string().refine(validator.isMobilePhone),
  sizeOfPeoples: z.number().min(1, {
    message: "Number of people must be at least 1.",
  }),
  location: z.enum(["Al", "Chittagong", "Sylhet", "Rangpur", "Khulna"]),
  companyName: z.string().min(2, {
    message: "Company Name must be at least 2 characters.",
  }),
  EHR: z.string().min(2, {
    message: "EHR must be at least 2 characters.",
  }),
  MedicalSpeciality: z.string().min(2, {
    message: "Medical Speciality must be at least 2 characters.",
  })
})