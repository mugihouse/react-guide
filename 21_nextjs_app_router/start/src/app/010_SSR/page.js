import ArticleList from "@/components/articleList";
import ClientComp from "./components/ClientComp";
import { ENDPOINT } from "@/constants";

export default async function SSR() {
  const articles = await fetch(ENDPOINT).then((res) => res.json());
  return (
    <>
      <div>SSR PAGE</div>
      <ClientComp />
      <ArticleList basePath={"/010_SSR"} list={articles} />
    </>
  );
}
