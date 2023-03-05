import { Divider, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <>
      <Flex
        w="100%"
        p="6"
        justifyContent="space-between"
        alignItems="center"
        direction={["column", "row"]}
        gap="6"
      >
        <Flex gap="3" alignItems="center">
          <Image width="42" height="42" alt="Logo" src="/logo.png" />
          <Heading as="h1">
            {process.env.NEXT_PUBLIC_SITE_TITLE || "My Blog"}
          </Heading>
        </Flex>
        <Flex gap="3">
          <Link href="/study">
            <Heading as="h2" size={["sm", "md"]}>
              스터디
            </Heading>
          </Link>
          <Link href="/project">
            <Heading as="h2" size={["sm", "md"]}>
              프로젝트
            </Heading>
          </Link>
          <Link href={`${process.env.NEXT_PUBLIC_API_URL}/api/keycloak/login`}>
            <Heading as="h2" size={["sm", "md"]}>
              로그인
            </Heading>
          </Link>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
}
