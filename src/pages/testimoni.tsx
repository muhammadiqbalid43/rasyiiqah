import Layout from "@/components/layout";
import Image from "next/image";

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
          <Image
            src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="galeri image"
            width={360}
            height={272}
            className="object-cover rounded-2xl "
          />
          <Image
            src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="galeri image"
            width={360}
            height={272}
            className="object-cover rounded-2xl "
          />
          <Image
            src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="galeri image"
            width={360}
            height={272}
            className="object-cover rounded-2xl "
          />
          <Image
            src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="galeri image"
            width={360}
            height={272}
            className="object-cover rounded-2xl "
          />
          <Image
            src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="galeri image"
            width={360}
            height={272}
            className="object-cover rounded-2xl "
          />
          <Image
            src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="galeri image"
            width={360}
            height={272}
            className="object-cover rounded-2xl "
          />
        </div>
      </div>
    </Layout>
  );
};

export default TestimoniPage;
