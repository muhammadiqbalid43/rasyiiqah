import Layout from "@/components/layout";

const BlogPage = () => {
  return (
    <>
      <Layout>
        <main>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1>Travel & Tour Blog</h1>
                  <p>
                    Temukan wawasan, kiat, dan kisah seputar umrah dan
                    perjalanan suci.
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </section>
          <section></section>
          <section></section>
          <section></section>
        </main>
      </Layout>
    </>
  );
};

export default BlogPage;
