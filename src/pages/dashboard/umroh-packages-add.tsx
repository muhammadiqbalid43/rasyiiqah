import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const UmrohPackagesAdd = () => {
  return (
    <div className="container py-6">
      <Card>
        <form action="">
          <CardHeader>
            <CardTitle>Add New Umroh Packages</CardTitle>
            <CardDescription>Lorem ipsum</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company">Nama</Label>
              <Input id="Name" placeholder="Masukan nama kamu" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Masukan gambar</Label>
              <Input id="Name" type="file" placeholder="Masukan nama kamu" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Type</Label>
              <Input id="Name" placeholder="Masukan nama kamu" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Durasi</Label>
              <Input id="Name" placeholder="Masukan nama kamu" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Kuota</Label>
              <Input id="Name" placeholder="Masukan nama kamu" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Lokasi Keberangkatan</Label>
              <Input id="Name" placeholder="Masukan nama kamu" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Tanggal Keberangkatan</Label>
              <Input id="Name" placeholder="Masukan nama kamu" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Content</Label>
              <Textarea id="Name" placeholder="Masukan nama kamu" />
            </div>
            <Button>Simpan</Button>
          </CardContent>
        </form>
      </Card>
    </div>
  );
};

export default UmrohPackagesAdd;
