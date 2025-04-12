import BranchCreateDialog from "@/components/branch/branch-create-dialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useBranches } from "@/queries/branch-queries";
import { Branch, PaginationParams } from "@/types/branch";
import Image from "next/image";
import { useState } from "react";

const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_API_IMAGE_URL;

const BranchesPage = () => {
  const [pagination, setPagination] = useState<PaginationParams>({
    page: 1,
    per_page: 10,
  });

  const { data, isLoading, isError } = useBranches(pagination);

  const handleNextPage = () => {
    setPagination((prev: PaginationParams) => ({
      ...prev,
      page: (prev?.page ?? 1) + 1,
    }));
  };

  const handlePrevPage = () => {
    if ((pagination.page ?? 1) > 1) {
      setPagination((prev) => ({
        ...prev,
        page: (prev?.page ?? 1) - 1,
      }));
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading branches</div>;
  return (
    <div className="container py-8 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Branches</h1>
        <BranchCreateDialog />
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Map URL</TableHead>
              <TableHead>Image</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((branch: Branch) => (
              <TableRow key={branch.id}>
                <TableCell>{branch.name}</TableCell>
                <TableCell>{branch.phone}</TableCell>
                <TableCell>{branch.address}</TableCell>
                <TableCell>
                  {/* <Link
                    href={branch.map_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Map
                  </Link> */}
                  <p>{branch.map_url}</p>
                </TableCell>
                <TableCell>
                  {/* ✅ Tambahkan tag img untuk menampilkan gambar */}
                  {branch.image && (
                    <Image
                      src={`${IMAGE_BASE_URL}/storage/${branch.image}`}
                      alt={`Branch ${branch.name}`}
                      className="object-cover w-10 h-10 rounded-md"
                      width={40}
                      height={40}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <Button onClick={handlePrevPage} disabled={pagination.page === 1}>
          Previous
        </Button>
        <span>Page {pagination.page}</span>
        <Button
          onClick={handleNextPage}
          disabled={
            !data?.data?.length || data.data.length < pagination.per_page
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default BranchesPage;
