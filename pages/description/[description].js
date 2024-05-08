import Head from "next/head";
import { useRouter } from "next/router";
import ArticleDescription from "../../components/ArticleDescription";
// import ArticleItem from '../../components/ArticleItem';

const descriptionpage = () => {
  const router = useRouter();
  // const {description} = router.query;
  const { description } = router.query;
  if (description) {
    console.log("Value of Id =", description);
  }
  return (
    <div>
      <Head>
        <title>Description</title>
      </Head>
      <h1 align="center">Description Page</h1>
      <ArticleDescription value={description} />
    </div>
  );
};

export default descriptionpage;
