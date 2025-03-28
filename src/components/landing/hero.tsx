import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="relative ring-1">
      <div className="absolute inset-0 z-10 bg-black/60" />
      <div className="relative  h-[400px] ">
        <Image
          src="https://fakeimg.pl/1200x400"
          alt=""
          width={1400}
          height={400}
          className="object-cover h-[400px]"
        />
      </div>
      <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
        <Badge className="mb-4">Spiritual Journey</Badge>
        <h1 className="mb-6 text-4xl">
          Experience the Sacred Journey of Umrah
        </h1>
        <p className="mb-8 max-w-[600px] text-lg text-gray-200">
          {" "}
          Embark on a spiritual journey to the holy cities of Mecca and Medina
          with our comprehensive and comfortable Umrah packages.
        </p>
        <div className="flex flex-col gap-4 md:flex-row">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Explore Packages
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-black border-white hover:bg-white/10"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
