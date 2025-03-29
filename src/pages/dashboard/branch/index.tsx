import { CreateBranchDialog } from "@/components/branch/branch-dialog";
import BranchList from "@/components/branch/branch-list";
import BranchPagination from "@/components/branch/branch-pagination";
import { Button } from "@/components/ui/button";
import { useReadBranch } from "@/queries/branch-queries";

import { useState } from "react";

// const fetchBranches = async (): Promise<Branch[]> => {
//   const response = await axios.get(
//     "http://103.127.139.176:8082/api/v1/branches"
//   );
//   return response.data.data;
// };

const BranchPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, refetch } = useReadBranch(page);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSuccess = () => {
    refetch();

    if (error) {
      return (
        <div className="container py-8 mx-auto">
          <div className="text-center text-red-500">
            Error loading branches: {error.message}
          </div>
        </div>
      );
    }
  };
  // const {
  //   data: branches,
  //   isLoading,
  //   error,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["branches"],
  //   queryFn: fetchBranches,
  // });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading branches</div>;
  return (
    <div className="container py-8 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Branches</h1>
        <CreateBranchDialog onSuccess={handleSuccess}>
          <Button>Add New Branch</Button>
        </CreateBranchDialog>
      </div>

      <div>
        <BranchList branches={data?.data || []} isLoading={isLoading} />

        {data && (
          <BranchPagination
            currentPage={page}
            totalPages={page}
            onPageChange={handlePageChange}
          />
        )}
      </div>

      {/* <div className="grid gap-4">
        {branches?.map((branch) => (
          <div key={branch.id} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{branch.name}</h2>
            <p>{branch.address}</p>
            <p>{branch.phone}</p>
            <Image src={branch.image} width={100} height={100} alt="hello" />
          </div>
        ))}
      </div> */}

      {/* You would add your branches list here */}
    </div>
  );
};

export default BranchPage;
