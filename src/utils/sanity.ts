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
  const query = groq`*[_type == "course"]{pondeli[]{start,capacity},utery[]{start,capacity},streda[]{start,capacity},ctvrtek[]{start,capacity},patek[]{start,capacity},duration,price,title,value,age,file{asset->{url}}}`;

  const courses: SanityCourse[] = await client.fetch(query);

  return courses;
}
