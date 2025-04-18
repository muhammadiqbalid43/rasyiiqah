import CreateGalleryDialog from "@/components/gallery/create-gallery-dialog";
import DeleteConfirmationDialog from "@/components/gallery/delete-confirmation-dialog";
import UpdateGalleryDialog from "@/components/gallery/update-gallery-dialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGallery } from "@/queries/gallery-queries";
import { GalleryResponse } from "@/types/gallery";
import Image from "next/image";
import { useState } from "react";

const API_IMAGE_URL = process.env.NEXT_PUBLIC_API_IMAGE_URL;

const GalleryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useGallery(currentPage);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  function isGalleryResponse(data: unknown): data is GalleryResponse {
    return typeof data === "object" && data !== null && "data" in data;
  }

  const isLastPage = isGalleryResponse(data)
    ? (data.data.length ?? 0) < 10
    : true;

  return (
    <div className="container py-8 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Galeri</h1>
        <CreateGalleryDialog />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Judul</TableHead>
            <TableHead>Gambar</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((gallery) => (
            <TableRow key={gallery.id}>
              <TableCell>{gallery.title}</TableCell>
              <TableCell>
                {gallery.imageUrl && (
                  <Image
                    src={
                      typeof gallery.imageUrl === "string"
                        ? `${API_IMAGE_URL}/storage/${gallery.imageUrl}`
                        : URL.createObjectURL(gallery.imageUrl)
                    }
                    alt={gallery.title}
                    className="object-cover w-10 h-10"
                    width={40}
                    height={40}
                  />
                )}
              </TableCell>
              <TableCell className="flex gap-2">
                <UpdateGalleryDialog galleryId={gallery.id}>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </UpdateGalleryDialog>
                <DeleteConfirmationDialog id={gallery.id} title={gallery.title}>
                  <Button variant="destructive" size="sm">
                    Hapus
                  </Button>
                </DeleteConfirmationDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between mt-4">
        <Button
          variant="outline"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Sebelumnya
        </Button>

        <span>Halaman {currentPage}</span>

        <Button
          variant="outline"
          disabled={isLastPage}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Selanjutnya
        </Button>
      </div>
    </div>
  );
};

export default GalleryPage;
