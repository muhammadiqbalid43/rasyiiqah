import { Calendar, CreditCard, Package, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SectionCards() {
  return (
    <div className="*:data-[slot=card]:shadow-xs  md:grid-cols-4 grid grid-cols-2 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Total Pelanggan</CardTitle>
          <Users className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,248</div>
          <p className="text-xs text-muted-foreground">
            +12% dari bulan kemarin
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Paket Aktif</CardTitle>
          <Package className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-muted-foreground">+2 Paket Baru</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Pemesanan</CardTitle>
          <Calendar className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">432</div>
          <p className="text-xs text-muted-foreground">
            +18% dari bulan kemarin
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Pendapatan</CardTitle>
          <CreditCard className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="font-bold sm:text-2xl ">$432,680</div>
          <p className="text-xs text-muted-foreground">
            +7% dari bulan kemarin
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
