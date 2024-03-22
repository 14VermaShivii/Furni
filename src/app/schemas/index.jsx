import * as Yup from "yup";

 export const loginschema= Yup.object({
    email: Yup.string().min(2).required("Please enter your email"),
    password:Yup.string().min(6).required("please enter your password")
})

export const forgotpasswordschema=Yup.object({
    email: Yup.string().min(2).required("Please enter your email"),
})

export const signupschema=Yup.object({
    firstname: Yup.string().min(2).max(25).required("Please enter your name"),
    lastname:Yup.string().min(4).required("please enter your lastname"),
    email: Yup.string().min(2).required("Please enter your email"),
    password:Yup.string().min(6).required("please enter your password")
})
export const changepasswordschema=Yup.object({
    oldpassword: Yup.string().min(2).required("Please enter your oldpassword"),
    newpassword:Yup.string().min(6).required("please enter your newpassword")
})
export const resetpasswordschema =Yup.object({
    newpassword:Yup.string().min(6).required("please enter your password"),
    confirmpassword:Yup.string().min(6).required("please enter your password")
})

export const createblogschema = Yup.object({
    Blogtitle:Yup.string().min(6).required("please enter your Blogtitle name"),
    Blogdescription:Yup.string().min(8).required("please enter your Blogdescription") , 
    category:Yup.string().min(3).required("please enter your category")
})