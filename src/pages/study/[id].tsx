import axios from "axios";
import { Header } from "components/Header";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { ListResponse, Response, Study } from "types/strapi";

export default function Home({
  study,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{study.attributes.name}</title>
      </Head>
      <Header />
    </>
  );
}

export const getStaticProps: GetStaticProps<{ study: Study }> = async ({
  params,
}) => {
  const id = params?.id;

  const { data: study } = await axios.get<Response<Study>>(
    `${process.env.NEXT_PUBLIC_API_URL || ""}/api/posts/${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    }
  );

  return {
    props: { study: study.data },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: studies } = await axios.get<ListResponse<Study>>(
    `${process.env.NEXT_PUBLIC_API_URL || ""}/api/posts`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    }
  );

  return {
    paths: studies.data.map((study) => study.id.toString()),
    fallback: false,
  };
};
