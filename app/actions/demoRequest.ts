"use server";

import * as z from "zod";
import {  sendDemoReqEmail } from "@/lib/mail";
import { CreateDemoSchema } from "../schemas";

export const demoRequest = async (values: z.infer<typeof CreateDemoSchema>)=>{
    const validateFields = CreateDemoSchema.safeParse(values);

    if(!validateFields.success){
        return{error:"Invalid fields!"};
    };

    const {fName,sName,email,mobnumber,sizeOfPeoples,location,companyName,EHR,MedicalSpeciality } = validateFields.data;

    try {
        await sendDemoReqEmail( fName,sName,email,mobnumber,sizeOfPeoples,location,companyName,EHR,MedicalSpeciality)
        .then(()=>{
            return {success:"Email sent!"}
        });
    } catch (error) {
        throw error;
    }
};