// import { Flex, Heading } from "@chakra-ui/react";
// import axios from "axios";
// import { Header } from "components/Header";
// import { PostCard } from "components/PostCard";
// import { GetStaticProps, InferGetStaticPropsType } from "next";
// import { ListResponse, Post } from "types/strapi";

import { Header } from "components/Header";

// export default function Home({
//   posts,
// }: InferGetStaticPropsType<typeof getStaticProps>) {
//   return (
//     <>
//       <Header />
//       <Flex
//         w="100%"
//         maxW={["320px", "480px", "768px"]}
//         mx="auto"
//         mt="6"
//         px="10px"
//         gap="6"
//         direction="column"
//       >
//         <Heading as="h1">전체 글 보기</Heading>
//         {posts.map((post) => (
//           <PostCard key={post.id} post={post} />
//         ))}
//       </Flex>
//     </>
//   );
// }

// export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
//   const { data } = await axios.get<ListResponse<Post>>(
//     `${process.env.NEXT_PUBLIC_API_URL || ""}/api/posts?populate=*`,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.API_TOKEN}`,
//       },
//     }
//   );

//   return {
//     props: { posts: data.data },
//   };
// };

export default function Home() {
  return (
    <>
      <Header />
    </>
  );
}
