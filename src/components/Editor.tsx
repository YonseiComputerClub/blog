import dynamic from "next/dynamic";

export const Editor = dynamic(
  async () => (await import("@toast-ui/react-editor")).Editor,
  { ssr: false }
);
