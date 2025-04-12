import CreateLegalityDialog from "@/components/legality/create-legality-dialog";
import DeleteConfirmationDialog from "@/components/legality/delete-confirmation-dialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLegalities } from "@/queries/legality-queries";
import Image from "next/image";
import { useState } from "react";

const API_IMAGE_URL = process.env.NEXT_PUBLIC_API_IMAGE_URL;

const LegalityPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useLegalities(currentPage);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const isLastPage = (data?.data?.length ?? 0) < 10;
  return (
    <div className="container py-8 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Legalitas</h1>
        <CreateLegalityDialog />
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
          {data?.data?.map((legality) => (
            <TableRow key={legality.id}>
              <TableCell>{legality.title}</TableCell>
              <TableCell>
                {legality.imageUrl && (
                  <Image
                    src={
                      typeof legality.imageUrl === "string"
                        ? `${API_IMAGE_URL}/storage/${legality.imageUrl}`
                        : URL.createObjectURL(legality.imageUrl)
                    }
                    alt={legality.title}
                    className="object-cover w-10 h-10"
                    width={40}
                    height={40}
                  />
                )}
              </TableCell>
              <TableCell>
                {/* <UpdateLegalityDialog id={legality.id}>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </UpdateLegalityDialog> */}
                <DeleteConfirmationDialog
                  id={legality.id}
                  title={legality.title}
                >
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

export default LegalityPage;
