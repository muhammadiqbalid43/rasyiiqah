import { When } from "@/components/helpers/when";
import { AlertDeleteDialog } from "@/components/modules/alert-delete-dialog";
import { Pagination } from "@/components/modules/pagination";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";
import { Collection } from "@/lib/collection";
import { useBranches, useDeleteBranch } from "@/queries/branch-queries";
import { useQueryState } from "nuqs";
import { FormDialog } from "./_partials/form-dialog";
import { BASE_URL } from "@/lib/constants";

const BranchesPage = () => {
  const [page, setPage] = useQueryState("page", { defaultValue: "1" });
  const { data } = useBranches({
    page: Number(page),
    per_page: 10,
  });

  const deleteBranch = useDeleteBranch();
  const handleDelete = (id: number) => {
    deleteBranch.mutate(id, {
      onSuccess: () => {
        toast({
          title: "Berhasil",
          description: "Cabang berhasil dihapus.",
        });
      },
    });
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Master Paket</h1>

        <FormDialog>
          <Button>Buat Baru</Button>
        </FormDialog>
      </div>

      <When
        is={Collection.isNotEmpty(data?.data)}
        fallback={<p>Belum ada data.</p>}
      >
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Map URL</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.data.map((branch) => (
                <TableRow key={branch.id}>
                  <TableCell>{branch.name}</TableCell>
                  <TableCell>{branch.phone}</TableCell>
                  <TableCell>{branch.address}</TableCell>
                  <TableCell>
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View Map
                    </a>
                  </TableCell>
                  <TableCell>
                    {branch.imageUrl && (
                      <img
                        src={`${BASE_URL}/storage/${branch.imageUrl}`}
                        alt={`Branch ${branch.name}`}
                        className="h-24"
                      />
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <FormDialog branch={branch}>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </FormDialog>

                      <AlertDeleteDialog
                        onConfirm={() => handleDelete(branch.id as number)}
                      >
                        <Button variant="destructive" size="sm">
                          Hapus
                        </Button>
                      </AlertDeleteDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Pagination
          onPageChange={(page) => setPage(page)}
          {...(data?.meta as Meta)}
        />
      </When>
    </div>
  );
};

export default BranchesPage;
