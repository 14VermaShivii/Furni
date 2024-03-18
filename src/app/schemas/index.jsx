import * as Yup from "yup";

 export const loginschema= Yup.object({
    email: Yup.string().min(2).max(25).required("Please enter your email"),
    password:Yup.string().min(6).required("please enter your password")
})

export const forgotpasswordschema=Yup.object({
    email: Yup.string().min(2).max(25).required("Please enter your email"),
})

export const signupschema=Yup.object({
    firstname: Yup.string().min(2).max(25).required("Please enter your name"),
    lastname:Yup.string().min(6).required("please enter your lastname"),
    email: Yup.string().min(2).max(25).required("Please enter your email"),
    password:Yup.string().min(6).required("please enter your password")
})