"use server";
import sendgrid from "@sendgrid/mail";
import { redirect } from "next/navigation";
interface FSProps {
  message: string;
}

export default async function ContactFormAction(
  prevState: FSProps,
  formData: FormData,
) {
  //set the sendgrid api
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

  if (formData.get("name") === "") {
    return {
      message: {
        name: "Please enter your name.",
      },
    };
  }

  if (formData.get("email") === "") {
    return {
      message: {
        email: "Please enter your email.",
      },
    };
  }

  if (formData.get("message") === "") {
    return {
      message: {
        message: "Please tell me how I can help you?",
      },
    };
  }

  const mail = {
    to: "ben@justben.uk",
    from: "ben@justben.uk",
    subject: "Contact Form Submission",
    html: `
        <div>
          <ul>
            <li>Name: ${formData.get("name")}</li>
            <li>Company: ${formData.get("company")}</li>
            <li>Email: ${formData.get("email")}</li>
            <li>Phone: ${formData.get("phone")}</li>
          </ul>
          <p style={font-size: 14px;}>${formData.get("message")}</p>
        </div>
    `,
  };

  //send the form
  try {
    await sendgrid.send(mail);
  } catch (err) {
    return {
      message: {
        form: "Something Went Wrong",
      },
    };
  } finally {
    return redirect("/");
  }
}
