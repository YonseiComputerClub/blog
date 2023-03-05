import { Flex, Heading } from "@chakra-ui/react";
import axios from "axios";
import { Header } from "components/Header";
import { StudyCard } from "components/StudyCard";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Study } from "types/strapi";

export default function Studies({
  studies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Header />
      <Flex
        w="100%"
        maxW={["320px", "480px", "768px"]}
        mx="auto"
        mt="6"
        px="10px"
        gap="6"
        direction="column"
      >
        <Heading as="h1">스터디 목록</Heading>
        {studies.map((study) => (
          <StudyCard key={study.id} study={study} />
        ))}
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  studies: Study[];
}> = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL || ""}/api/studies`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    }
  );
  return {
    props: { studies: data.data },
  };
};
