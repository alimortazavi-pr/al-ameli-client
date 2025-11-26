"use client";

import { FC, useState } from "react";
import { Formik } from "formik";
import { Button, Input, Textarea } from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "next-nprogress-bar";

//Interfaces
import { IContactUsForm } from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { sentContactUsMessage } from "@/lib/layouts/actions";

//Validators
import { contactUsFormValidator } from "@/common/validators";

//Constants
import { PATHS } from "@/common/constants";

export const ContactUsContent: FC = () => {
  //Redux
  const dispatch = useAppDispatch();

  //Next
  const router = useRouter();

  //States
  const initialContactUsFrom: IContactUsForm = {
    name: "",
    emailOrMobile: "",
    message: "",
  };
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Functions
  async function formSubmitHandler(values: IContactUsForm) {
    setIsLoading(true);
    try {
      await dispatch(sentContactUsMessage(values));
      setIsLoading(false);
      router.push(PATHS.HOME);
      toast.success("لقد تم ارسال رسالتك بنجاح.", {
        position: "top-center",
      });
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-center",
      });
      setIsLoading(false);
    }
  }

  return (
    <div>
      <h6 className="text-2xl text-secondary-900 font-bold mb-2">تواصل معنا</h6>
      <p className="text-secondary-600 text-lg mb-5">
        يمكنكم كتابة رسالة وإرسالها إلينا. سوف نتواصل معكم في أقرب فرصة.
      </p>
      <Formik
        onSubmit={formSubmitHandler}
        initialValues={initialContactUsFrom}
        validationSchema={contactUsFormValidator}
      >
        {({
          handleSubmit,
          touched,
          errors,
          handleBlur,
          handleChange,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              label="الإسم"
              className="mb-2"
              name="name"
              isInvalid={touched.name && errors.name ? true : false}
              color={touched.name && errors.name ? "danger" : undefined}
              errorMessage={
                touched.name && errors.name ? errors.name : undefined
              }
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
            />
            <Input
              type="text"
              label="رقم هاتف أو إيميل"
              className="mb-2"
              name="emailOrMobile"
              isInvalid={
                touched.emailOrMobile && errors.emailOrMobile ? true : false
              }
              color={
                touched.emailOrMobile && errors.emailOrMobile
                  ? "danger"
                  : undefined
              }
              errorMessage={
                touched.emailOrMobile && errors.emailOrMobile
                  ? errors.emailOrMobile
                  : undefined
              }
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.emailOrMobile}
              description="يرجى ادخال هذا الحقل لكي نتمكن من التواصل معكم"
            />
            <Textarea
              type="text"
              label="نص الرسالة"
              className="mb-2"
              name="message"
              isInvalid={touched.message && errors.message ? true : false}
              color={touched.message && errors.message ? "danger" : undefined}
              errorMessage={
                touched.message && errors.message ? errors.message : undefined
              }
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.message}
            />
            <div className="mt-4">
              <Button
                type="submit"
                className="w-full"
                isDisabled={isLoading}
                isLoading={isLoading}
                color="primary"
                size="lg"
              >
                ارسال
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
