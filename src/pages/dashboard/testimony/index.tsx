import CreateTestimony from "@/components/testimony/create-testimony-dialog";
import DeleteConfirmationDialog from "@/components/testimony/delete-confirmation-dialog";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTestimonies } from "@/queries/testimony-queries";
import { useState } from "react";

const TestimoniesPage = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 10,
  });

  const { data, isLoading, isError } = useTestimonies(pagination);

  const hasNextPage = data?.data?.length === pagination.per_page;

  if (isError) {
    return <div>Error loading testimonies</div>;
  }
  return (
    <div className="container py-8 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Testimoni</h1>
        <CreateTestimony />
      </div>

      <Table>
        <TableCaption>Daftar Testimoni</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>URL</TableHead>
            <TableHead>AKSI</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading
            ? Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton className="h-4 w-[50px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[100px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[300px]" />
                  </TableCell>
                </TableRow>
              ))
            : data?.data.map((testimony) => (
                <TableRow key={testimony.id}>
                  <TableCell>{testimony.id}</TableCell>
                  <TableCell>{testimony.type}</TableCell>
                  <TableCell className="max-w-xs truncate">
                    {testimony.url}
                  </TableCell>
                  <TableCell>
                    <DeleteConfirmationDialog
                      id={testimony.id}
                      title={testimony.id}
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
        <div className="text-sm text-muted-foreground">
          Page {pagination.page} {/* Hapus info last_page */}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            disabled={pagination.page === 1 || isLoading}
            onClick={() =>
              setPagination((prev) => ({ ...prev, page: prev.page - 1 }))
            }
          >
            Previous
          </Button>
          <Button
            variant="outline"
            disabled={isLoading || !hasNextPage}
            onClick={() =>
              setPagination((prev) => ({ ...prev, page: prev.page + 1 }))
            }
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimoniesPage;
