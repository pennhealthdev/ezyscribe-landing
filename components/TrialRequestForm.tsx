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
import { demoRequest } from "@/app/actions/sendMails"
import { SparcleButton } from "./sparkle-button"
import { Checkbox } from "./ui/checkbox"
import Link from "next/link"
import { TrialDemoSchema } from "@/app/schemas"

export function TrialRequestInputForm() {

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isSubmittingDemo, setIsSubmittingDemo] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const form = useForm<z.infer<typeof TrialDemoSchema>>({
    resolver: zodResolver(TrialDemoSchema),
    defaultValues: {
      fName: "",
      sName: "",
      email: "",
      mobnumber: "",
      location: "",
      companyName: "",
      EHR: "",
      MedicalSpeciality: "",
      termsAndCondition: false
    },
  })


  function onSubmit(data: z.infer<typeof TrialDemoSchema>) {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full text-foreground grid grid-cols-1 sm:grid-cols-2 gap-2 items-end p-0 mt-5">
        <FormField
          control={form.control}
          name="fName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name *</FormLabel>
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
              <FormLabel>Last Name *</FormLabel>
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
              <FormLabel>Email *</FormLabel>
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
              <FormLabel>Firm Name</FormLabel>
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
        <FormField
          control={form.control}
          name="termsAndCondition"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 col-span-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
                <FormLabel>
                Accept terms and conditions
                </FormLabel>
                <FormDescription>
                You agree to our{" "}
                  <Link href="/terms-of-use" className="underline">Terms of Use{" "}</Link> and {" "}
                  <Link href="/privacy" className="underline">Privacy Policy</Link>.
                </FormDescription>
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
