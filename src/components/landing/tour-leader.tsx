import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

const TourLeader = () => {
  return (
    <>
      <div className="py-16 ">
        <div className="container px-4 mx-auto">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#ff7200]">
              Tour Leader
            </h2>
          </div>
          <div className="flex justify-center">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-[600px]  "
            >
              <CarouselContent>
                {Array.from({ length: 8 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex items-center justify-center p-6 aspect-square">
                          <span className="text-3xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourLeader;
