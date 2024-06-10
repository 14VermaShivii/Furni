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
    blogTitle:Yup.string().min(6).required("please enter your Blogtitle name"),
    blogDescription:Yup.string().min(8).required("please enter your Blogdescription") , 
    category:Yup.string().min(3).required("please enter your category")
})
export const updateblogschema = Yup.object({
    blogTitle:Yup.string().min(6).required("please enter your Blogtitle name"),
    blogDescription:Yup.string().min(8).required("please enter your Blogdescription") , 
    category:Yup.string().min(3).required("please enter your category")
})
export const footerchema=Yup.object({
    email: Yup.string().min(5).required("Please enter your email"),
})
export const editblogschema = Yup.object({
    firstname:Yup.string().min(3).required("please enter your Name"),
    lastname:Yup.string().min(3).required("please enter your Lastname"),
    about:Yup.string().min(3).required("please enter your About Info"),
    dob:Yup.string().required("please enter your Date of Birth"),
    email: Yup.string().min(2).required("Please enter your email"),
    profilePicture:Yup.string().min(3).required("please put your Profilepicture"),
    timeline:Yup.string().min(3).required("please enter your timeline"),
})