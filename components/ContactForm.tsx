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
import { contactRequest, demoRequest } from "@/app/actions/sendMails"
import { SparcleButton } from "./sparkle-button"
import { CreateDemoSchema } from "@/app/schemas"
import { Checkbox } from "./ui/checkbox"
import Link from "next/link"



export function InputForm() {

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isSubmittingDemo, setIsSubmittingDemo] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const form = useForm<z.infer<typeof CreateDemoSchema>>({
    resolver: zodResolver(CreateDemoSchema),
    defaultValues: {
      fName: "",
      sName: "",
      email: "",
      mobnumber: "",
      sizeOfPeoples: 1,
      location: "",
      companyName: "",
      EHR: "",
      MedicalSpeciality: "",
      smsupdates: false,
      readPrivacy: true,
    },
  })


  function onSubmit(data: z.infer<typeof CreateDemoSchema>) {
    setError("");
    setSuccess("");
    setIsSubmittingDemo(true);
    startTransition(() => {
      contactRequest(data).then((data) => {
        toast.success("Form Submitted", {
          description:
            "Your form has been submitted successfully and will be processed shortly.",
        });
        form.reset();
      })
        .catch(() => {
          setError("Something went wrong")
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
              <FormLabel>First Name *</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} className="text-black" />
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
              <FormLabel>Lasr Name *</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} className="text-black" />
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
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} className="text-black" />
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
                <Input placeholder="" {...field} className="text-black" />
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
                <Input placeholder="" {...field} className="text-black" />
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
                <Input placeholder="" {...field} className="text-black" />
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
                <Input placeholder="" {...field} className="text-black" />
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
                <Input placeholder="" {...field} className="text-black" />
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
                <Input placeholder="" {...field} className="text-black" />
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
                <Input placeholder="" {...field} className="text-black" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="smsupdates"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start gap-2 col-span-2 hover:bg-accent/50 rounded-lg border border-transparent p-3 has-[[aria-checked=true]]:border-[#2f3192]  has-[[aria-checked=true]]:bg-[#2f319271]">
              <FormControl>
                <Checkbox
                  className="data-[state=checked]:border-[#2f3192] data-[state=checked]:bg-[#2f3192] data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700 bg-[#2f3192]"
                  checked={!!field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-sm font-normal !mt-0">
                I agree to receive SMS updates from Pennhealth. Message and data rates may apply and can opt out anytime by replying 'STOP' to any message.
              </FormLabel>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="readPrivacy"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start gap-2 col-span-2 hover:bg-accent/50 rounded-lg border border-transparent p-3 has-[[aria-checked=true]]:border-[#2f3192]  has-[[aria-checked=true]]:bg-[#2f319271]">
              <FormControl>
                <Checkbox
                  className="data-[state=checked]:border-[#2f3192] data-[state=checked]:bg-[#2f3192] data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700 bg-[#2f3192]"

                  checked={!!field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-sm font-normal !mt-0 p-0">
                I have read and understood the Pennhealthinfo <Link className="underline underline-offset-2" href="/privacy">Privacy Policy</Link> *.
              </FormLabel>
            </FormItem>
          )}
        />

        <SparcleButton type="submit" className="w-full col-span-2">
          Submit
        </SparcleButton>
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
  )
}
