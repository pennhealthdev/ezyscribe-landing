import { z } from "zod";
import validator from "validator";


export const CreateDemoSchema = z.object({
  fName: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  sName: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),
  email: z.string().email().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  mobnumber: z.optional(z.string().refine(
    (value) => !value || value.length > 2,
    { message: "Mobile number must have at least 2 characters if provided." }
  )),
  sizeOfPeoples: z.optional(z.number()),
  location: z.optional(z.string().refine(
    (value) => !value || value.length > 2,
    { message: "Location must be at least 2 characters if provided." }
  )),
  companyName: z.optional(z.string().refine(
    (value) => !value || value.length > 2,
    { message: "Company Name must be at least 2 characters if provided." }
  )),
  EHR: z.optional(z.string().refine(
    (value) => !value || value.length > 2,
    { message: "EHR must be at least 2 characters if provided." }
  )),
  MedicalSpeciality: z.optional(z.string().refine(
    (value) => !value || value.length > 2,
    { message: "Medical Speciality must be at least 2 characters if provided." }
  )),
})



export const TrialDemoSchema = z.object({
  fName: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  sName: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),
  email: z.string().email().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  mobnumber: z.optional(z.string().refine(
    (value) => !value || value.length > 2,
    { message: "Mobile number must have at least 2 characters if provided." }
  )),
  location: z.optional(z.string().refine(
    (value) => !value || value.length > 2,
    { message: "Location must be at least 2 characters if provided." }
  )),
  companyName: z.optional(z.string().refine(
    (value) => !value || value.length > 2,
    { message: "Company Name must be at least 2 characters if provided." }
  )),
  EHR: z.optional(z.string().refine(
    (value) => !value || value.length > 2,
    { message: "EHR must be at least 2 characters if provided." }
  )),
  MedicalSpeciality: z.optional(z.string().refine(
    (value) => !value || value.length > 2,
    { message: "Medical Speciality must be at least 2 characters if provided." }
  )),
  termsAndCondition: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions.",
  }),
});
