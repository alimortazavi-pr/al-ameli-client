import * as yup from "yup";

export const contactUsFormValidator = yup.object().shape({
  name: yup.string().required("الاسم هو حقل مطلوب"),
  emailOrMobile: yup.string().required('رقم هاتف أو إيميل هو حقل مطلوب'),
  message: yup.string().required('نص الرسالة هو حقل مطلوب'),
});
