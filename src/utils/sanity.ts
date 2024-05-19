import { groq } from "next-sanity";

import {
  SanityActuality,
  SanityCourse,
  SanityDocument,
  SanityFaq,
  SanityInfoBar,
} from "~/domains";
import { client } from "~/libs";

export async function getActualities(): Promise<SanityActuality[]> {
  const query = groq`*[_type == "home" && visibility == true]{text,order,title}|order(order asc)`;

  const actualities: SanityActuality[] = await client.fetch(query);

  return actualities;
}

export async function getFAQs(): Promise<SanityFaq[]> {
  const query = groq`*[_type == "faq"]{title,order,faqItems[]{icon,text,title}}|order(order asc)`;

  const faqs: SanityFaq[] = await client.fetch(query);

  return faqs;
}

export async function getDocuments(): Promise<SanityDocument[]> {
  const query = groq`*[_type == "uploadFile"]{title,order,file{asset->{url}}}|order(order asc)`;

  const documents: SanityDocument[] = await client.fetch(query);

  return documents;
}

export async function getInfoBar(): Promise<SanityInfoBar> {
  const query = groq`*[_type == "infoBar" && visibility == true][0]{title,visibility,text}`;

  const infoBar: SanityInfoBar = await client.fetch(query);

  return infoBar;
}

export async function getCourses(): Promise<SanityCourse[]> {
  const query = groq`*[_type == "course"]{pondeli[]{start, discount,skillLevel,capacity},utery[]{start, discount,skillLevel,capacity},streda[]{start, discount,skillLevel,capacity},ctvrtek[]{start, discount,skillLevel,capacity},patek[]{start, discount,skillLevel,capacity},duration,price,lectureFrequencyPricingOptions[]{price,title,lectureFrequency},title,value,age,file{asset->{url}}}`;

  const courses: SanityCourse[] = await client.fetch(query);

  return courses;
}

export async function getCourse(courseName: string): Promise<SanityCourse> {
  const query = groq`*[_type == "course" && value == $courseName]{pondeli[]{start, discount,skillLevel,capacity},utery[]{start, discount,skillLevel,capacity},streda[]{start, discount,skillLevel,capacity},ctvrtek[]{start, discount,skillLevel,capacity},patek[]{start, discount,skillLevel,capacity},duration,price,lectureFrequencyPricingOptions[]{price,title,lectureFrequency},title,value,age,file{asset->{url}}}[0]`;

  const course: SanityCourse = await client.fetch(query, { courseName });

  return course;
}
