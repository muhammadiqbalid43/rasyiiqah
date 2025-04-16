import { CalendarIcon, ChevronRightIcon } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

const BlogCard = () => {
  return (
    <div>
      <Card className="overflow-hidden">
        <div className="relative h-48">
          {/* <Image
            src="/placeholder.svg?height=300&width=400"
            alt="Blog post"
            fill
            className="object-cover"
          /> */}
          <div className="bg-gray-400 md:w-[400px] h-[200px]"></div>
        </div>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CalendarIcon className="w-4 h-4" />
              <span>April 2025</span>
            </div>
            <div className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
              Panduan
            </div>
          </div>
          <CardTitle className="line-clamp-2">
            Doa Penting untuk Perjalanan Umrah Anda
          </CardTitle>
          <CardDescription className="line-clamp-2">
            Pelajari doa dan permohonan penting untuk meningkatkan pengalaman
            spiritual Anda selama umrah.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button
            variant="ghost"
            className="w-full gap-2 hover:text-green-600 hover:bg-green-50"
          >
            Baca Artikel
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogCard;
