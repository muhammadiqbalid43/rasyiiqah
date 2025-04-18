import Layout from "@/components/layout";

const TestimoniPage = () => {
  return (
    <Layout>
      <div className="container px-4 py-12 mx-auto mb-12 ">
        <div className="mb-12 ">
          <h1 className="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl md:text-5xl">
            Testimoni
          </h1>
          <p className="mt-4 text-lg text-gray-600 w-[365px]  md:w-[500px] md:text-xl">
            Cerita dan kesan dari para jamaah yang telah merasakan pengalaman
            ibadah umroh bersama kami. Semoga menjadi inspirasi bagi perjalanan
            Anda selanjutnya.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:place-items-center">
          <div className="w-full h-[220px] md:h-[272px] md:w-[300px] bg-gray-500 rounded-md"></div>
          <div className="w-full h-[220px] md:h-[272px] md:w-[300px] bg-gray-500 rounded-md"></div>
          <div className="w-full h-[220px] md:h-[272px] md:w-[300px] bg-gray-500 rounded-md"></div>
          <div className="w-full h-[220px] md:h-[272px] md:w-[300px] bg-gray-500 rounded-md"></div>
          <div className="w-full h-[220px] md:h-[272px] md:w-[300px] bg-gray-500 rounded-md"></div>
          <div className="w-full h-[220px] md:h-[272px] md:w-[300px] bg-gray-500 rounded-md"></div>
        </div>
      </div>
    </Layout>
  );
};

export default TestimoniPage;
