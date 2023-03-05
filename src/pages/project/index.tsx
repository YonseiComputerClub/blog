export default function Home() {
  return <></>;
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data: studies } = await axios.get(
//     `${process.env.NEXT_PUBLIC_API_URL || ""}/api/posts`,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.API_TOKEN}`,
//       },
//     }
//   );
//   return {
//     props: { studies },
//   };
// };
