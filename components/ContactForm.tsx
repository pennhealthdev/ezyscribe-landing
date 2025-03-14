"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import validator from "validator";
import { startTransition, useState } from "react"
import { sendDemoReqEmail } from "@/lib/mail"
import { demoRequest } from "@/app/actions/demoRequest"
import { SparcleButton } from "./sparkle-button"

const FormSchema = z.object({
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

export function InputForm() {

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isSubmittingDemo, setIsSubmittingDemo] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fName: "",
      sName: "",
      email: "",
      mobnumber: "",
      sizeOfPeoples: 1,
      location: "Al",
      companyName: "",
      EHR: "",
      MedicalSpeciality: "",
    },
  })


  function onSubmit(data: z.infer<typeof FormSchema>) {
    setError("");
    setSuccess("");
    setIsSubmittingDemo(true);
    startTransition(() => {
      demoRequest(data).then((data) => {
          toast.success("Form Submitted", {
            description:
              "Your form has been submitted successfully and will be processed shortly.",
          });
          form.reset();
        })
        .catch(() => {setError("Something went wrong")
          setIsSubmittingDemo(false)
        });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full text-background grid grid-cols-1 sm:grid-cols-2 gap-4 items-end sm:-mt-60 mt-10 bg-[#1A1A1A] p-10 rounded-3xl placeholder:text-black">
        <FormField
          control={form.control}
          name="fName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} className="text-black"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lasr Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field}  className="text-black"/>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field}  className="text-black"/>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mobnumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile</FormLabel>
              <FormControl>
                <Input placeholder="" {...field}  className="text-black"/>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sizeOfPeoples"
          render={({ field }) => (
            <FormItem>
              <FormLabel>No of Peoples</FormLabel>
              <FormControl>
                <Input placeholder="" {...field}  className="text-black"/>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="" {...field}  className="text-black"/>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field}  className="text-black"/>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="EHR"
          render={({ field }) => (
            <FormItem>
              <FormLabel>EHR</FormLabel>
              <FormControl>
                <Input placeholder="" {...field}  className="text-black"/>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="MedicalSpeciality"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Medical Speciality</FormLabel>
              <FormControl>
                <Input placeholder="" {...field}  className="text-black"/>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <SparcleButton type="submit" className="w-full">
          Submit
        </SparcleButton>
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
  )
}
