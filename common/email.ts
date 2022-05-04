import * as nodemailer from "nodemailer";
import mjml2html from "mjml";
import Handlebars from "handlebars";
import fs from "fs";
import { promisify } from "util";

const processEnvAsAny: any = process.env;

export const createTransporter = () => {
  const transporter = nodemailer.createTransport({
    host: processEnvAsAny.SMTP_HOST,
    port: processEnvAsAny.SMTP_PORT,
    auth: {
      user: processEnvAsAny.SMTP_AUTH_USER,
      pass: processEnvAsAny.SMTP_AUTH_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  return transporter;
};

export const generateHtml = (mjml: string) => {
  const output = mjml2html(mjml);

  return output.html;
};

export const generateEmailHtml = async (mjml: string, context: any) => {
  const template = await Handlebars.compile(await generateHtml(mjml));

  return template({
    ...context,
    content: context.content.replace(/\n/gm, "<br />"),
    EMAIL_TEMPLATE_PUBLIC: process.env.EMAIL_TEMPLATE_PUBLIC,
    EMAIL_APP_LINK: process.env.EMAIL_APP_LINK,
  });
};

const generateTextStandardEmail = (options: StandardEmailOptions) => {
  return `${options.title}
    
    ${options.content}
    
    ${options.ctaHref}`;
};

export type StandardEmailOptions = {
  subject: string;
  title: string;
  content: string;
  ctaHref?: string;
  cta?: string;
};

export const createEmailFromTemplate = async (
  emailInbox: string,
  template: string,
  options: StandardEmailOptions
): Promise<nodemailer.SendMailOptions> => {
  const templateFromFile = await promisify(fs.readFile)(
    process.cwd() + "/pages/api/common/email-templates/" + template,
    "utf8"
  );

  return {
    from: process.env.EMAIL_FROM, // sender address
    to: emailInbox, // list of receivers
    subject: options.subject, // Subject line
    text: generateTextStandardEmail(options),
    html: await generateEmailHtml(templateFromFile, options),
  };
};

export const createStandardEmail = async (
  emailInbox: string,
  options: StandardEmailOptions
): Promise<nodemailer.SendMailOptions> => {
  return createEmailFromTemplate(emailInbox, 'standard.mjml', options);
}

export const sendEmail = async (options: nodemailer.SendMailOptions) => {
  const transporter = createTransporter();

  try {
    const result = await transporter.sendMail(options);

    console.log("Email sent result", result);
  } catch (error) {
    console.log("Email sent result", error);

    return false;
  }

  return true;
};

export const createEmailUrl = (path: string) => {
  return `${process.env.MOBILE_APP_URL}${path}`
}
