import { Landmark } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const Booking = () => {
  return (
    <div className="mt-4 ">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 w-[330px] md:w-full">
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Package</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Ahmad Fauzi</TableCell>
                  <TableCell>Premium Makkah</TableCell>
                  <TableCell>12 Mar 2024</TableCell>
                  <TableCell>
                    <Badge>Confirmed</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Siti Aminah</TableCell>
                  <TableCell>Economy Madinah</TableCell>
                  <TableCell>10 Mar 2024</TableCell>
                  <TableCell>
                    <Badge variant="outline">Processing</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Muhammad Rizki</TableCell>
                  <TableCell>VIP Package</TableCell>
                  <TableCell>8 Mar 2024</TableCell>
                  <TableCell>
                    <Badge>Confirmed</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fatimah Zahra</TableCell>
                  <TableCell>Standard Package</TableCell>
                  <TableCell>5 Mar 2024</TableCell>
                  <TableCell>
                    <Badge variant="outline">Processing</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-3 w-[330px] md:w-full">
          <CardHeader>
            <CardTitle>Popular Packages</CardTitle>
            <CardDescription>
              Top selling Umroh packages this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-md bg-primary/10">
                  <Landmark className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Premium Makkah</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>14 days</span>
                    <span className="mx-1">•</span>
                    <span>5-star hotels</span>
                  </div>
                </div>
                <div className="font-medium">$3,200</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-md bg-primary/10">
                  <Landmark className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Economy Madinah</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>10 days</span>
                    <span className="mx-1">•</span>
                    <span>3-star hotels</span>
                  </div>
                </div>
                <div className="font-medium">$2,100</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-md bg-primary/10">
                  <Landmark className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">VIP Package</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>21 days</span>
                    <span className="mx-1">•</span>
                    <span>Luxury hotels</span>
                  </div>
                </div>
                <div className="font-medium">$5,800</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-md bg-primary/10">
                  <Landmark className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Standard Package</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>12 days</span>
                    <span className="mx-1">•</span>
                    <span>4-star hotels</span>
                  </div>
                </div>
                <div className="font-medium">$2,800</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">
              View All Packages
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Booking;
