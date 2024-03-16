import * as Yup from "yup";

export const signUpSchema= Yup.object({
    Username: Yup.string().min(2).max(25).required("Please enter your name"),
    password:Yup.string().min(6).required("please enter your password")
})