import { CalendarIcon, MapIcon, UserIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

const JadwalKeberangkatan = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl tracking-tight ">
            Jadwal Keberangkatan Terdekat
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {" "}
            Pilih jadwal keberangkatan umroh yang sesuai dengan rencana
            perjalanan Anda
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {schedules.map((schedule, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all hover:shadow-lg"
            >
              <CardHeader className="bg-primary/5 pb-4">
                <div className="flex items-center justify-between">
                  <Badge
                    variant={
                      schedule.status === "Tersedia" ? "default" : "secondary"
                    }
                  >
                    {schedule.status}
                  </Badge>
                  <span className="text-sm font-medium text-muted-foreground">
                    {schedule.duration} Hari
                  </span>
                </div>
                <CardTitle className="mt-2">{schedule.name}</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-1 text-primary">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{schedule.date}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="mb-4 flex items-center gap-2">
                  <MapIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{schedule.route}</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Pembimbing: {schedule.guide}</span>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t bg-muted/20 px-6 py-3">
                <div className="font-bold text-primary">{schedule.price}</div>
                <Button size="sm">Detail</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline">Lihat Semua Jadwal</Button>
        </div>
      </div>{" "}
    </div>
  );
};

export default JadwalKeberangkatan;

const schedules = [
  {
    name: "Umroh Reguler Ramadhan",
    date: "15 Maret 2024",
    duration: 12,
    route: "Jakarta - Madinah - Makkah - Jakarta",
    guide: "Ustadz Ahmad",
    price: "Rp 35.000.000",
    status: "Tersedia",
  },
  {
    name: "Umroh Plus Turki",
    date: "20 Maret 2024",
    duration: 15,
    route: "Jakarta - Istanbul - Madinah - Makkah - Jakarta",
    guide: "Ustadz Mahmud",
    price: "Rp 45.000.000",
    status: "Tersedia",
  },
  {
    name: "Umroh Ekonomis",
    date: "25 Maret 2024",
    duration: 9,
    route: "Jakarta - Madinah - Makkah - Jakarta",
    guide: "Ustadz Hasan",
    price: "Rp 28.000.000",
    status: "Terbatas",
  },
];
