import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const UmrohPackages = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Umroh Packages</CardTitle>
        <Button size="sm">
          <Link href="/dashboard/umroh-packages-add">Add Package</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Premium Makkah</CardTitle>
              <CardDescription>14 days luxury experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative mb-4 overflow-hidden rounded-lg aspect-video">
                <Image
                  src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/560883848.jpg?k=0fc5ae808e6129835ee9808e182d3e5a43fe94285987782ecb267b27d7416ded&o=&hp=1"
                  height={200}
                  width={400}
                  alt="Premium Makkah Package"
                  className="object-cover w-full h-full"
                />
                <Badge className="absolute top-2 right-2">Popular</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span>14 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Accommodation:</span>
                  <span>5-star hotels</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transportation:</span>
                  <span>Premium airlines</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Meals:</span>
                  <span>Full board</span>
                </div>
                <div className="flex justify-between pt-2 text-lg font-bold">
                  <span>Price:</span>
                  <span>$3,200</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                Edit
              </Button>
              <Button size="sm">View Details</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Economy Madinah</CardTitle>
              <CardDescription>10 days affordable package</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative mb-4 overflow-hidden rounded-lg aspect-video">
                <Image
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/03/1d/34/welcome-to-intercontinental.jpg?w=1200&h=-1&s=1"
                  alt="Economy Madinah Package"
                  height={200}
                  width={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span>10 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Accommodation:</span>
                  <span>3-star hotels</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transportation:</span>
                  <span>Standard airlines</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Meals:</span>
                  <span>Half board</span>
                </div>
                <div className="flex justify-between pt-2 text-lg font-bold">
                  <span>Price:</span>
                  <span>$2,100</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                Edit
              </Button>
              <Button size="sm">View Details</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">VIP Package</CardTitle>
              <CardDescription>21 days exclusive experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative mb-4 overflow-hidden rounded-lg aspect-video">
                <Image
                  src="https://media-cdn.tripadvisor.com/media/photo-s/2e/d5/66/9c/hotel-exterior.jpg"
                  width={400}
                  height={200}
                  alt="VIP Package"
                  className="object-cover w-full h-full"
                />
                <Badge className="absolute top-2 right-2">Luxury</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span>21 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Accommodation:</span>
                  <span>Luxury hotels</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transportation:</span>
                  <span>Business class</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Meals:</span>
                  <span>Full board premium</span>
                </div>
                <div className="flex justify-between pt-2 text-lg font-bold">
                  <span>Price:</span>
                  <span>$5,800</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                Edit
              </Button>
              <Button size="sm">View Details</Button>
            </CardFooter>
          </Card>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing 3 of 12 packages
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UmrohPackages;
