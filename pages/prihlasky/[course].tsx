//interfaces
import { GetStaticPaths, GetStaticProps } from "next";
import ErrorPage from "pages/404";
//sanity
import { client } from "sanity";


// const Course = ({ course, courseType }: any) => {
//   return (
//     <div>
//       <h1>{courseType}</h1>
//     </div>
//   );
// };

// //commented just to disallow users to access these routes -> will be needed in future
// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const courseType = ctx.params?.course;

//   if (!ctx.params?.course)
//     return {
//       props: {},
//     };

//   const course = await client.fetch(
//     `*[_type == "${courseType}"]{capacity,_type,courseArray[],day,price}`
//   );

//   return {
//     props: {
//       course,
//       courseType,
//     },
//   };
// };

// export const getStaticPaths: GetStaticPaths = async (ctx) => {

//   const courses = [
//     {
//       name: "skolky",
//     },
//     {
//       name: "skoly",
//     },
//     {
//       name: "odpoledni-kurzy",
//     },
//   ];


//   const paths = courses.map((course) => ({ params: { course: course.name } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default ErrorPage;
