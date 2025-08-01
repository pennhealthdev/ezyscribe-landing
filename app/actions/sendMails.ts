"use server";

import * as z from "zod";
import {  send7DayDemoReqEmail, sendContactEmail } from "@/lib/mail";
import {  CreateDemoSchema, TrialDemoSchema } from "../schemas";

export const demoRequest = async (values: z.infer<typeof TrialDemoSchema>)=>{
    const validateFields = TrialDemoSchema.safeParse(values);

    if(!validateFields.success){
        return{error:"Invalid fields!"};
    };

    const {fName,sName,email,mobnumber,location,companyName,EHR,MedicalSpeciality } = validateFields.data;

    try {
        await send7DayDemoReqEmail( fName,sName,email,mobnumber,location,companyName,EHR,MedicalSpeciality)
        .then(()=>{
            return {success:"Email sent!"}
        });
    } catch (error) {
        throw error;
    }
};

export const contactRequest = async (values: z.infer<typeof CreateDemoSchema>)=>{
    const validateFields = CreateDemoSchema.safeParse(values);

    if(!validateFields.success){
        return{error:"Invalid fields!"};
    };

    const {fName,sName,email,mobnumber,location,companyName,EHR,MedicalSpeciality ,sizeOfPeoples, readPrivacy, smsupdates } = validateFields.data;

    try {
        await sendContactEmail( fName,sName,email,mobnumber,location,companyName,EHR,MedicalSpeciality, sizeOfPeoples, readPrivacy, smsupdates)
        .then(()=>{
            return {success:"Email sent!"}
        });
    } catch (error) {
        throw error;
    }
};