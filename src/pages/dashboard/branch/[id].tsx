import { Button } from "@/components/ui/button";
import { getBranchById } from "@/services/branch-service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const BranchDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: branch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["branch", id],
    queryFn: () => getBranchById(Number(id)),
    enabled: !!id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading branch</div>;
  if (!branch) return <div>Branch not found</div>;
  return (
    <div className="container py-8 mx-auto">
      {" "}
      <div className="mb-6">
        <Link href="/branches">
          <Button variant="outline">Back to Branches</Button>
        </Link>
      </div>
      <div className="p-6 bg-white rounded-lg shadow">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="w-full md:w-1/3">
            <Image
              src={branch.imageUrl}
              alt={branch.name}
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="mb-4 text-2xl font-bold">{branch.name}</h1>
            <div className="space-y-4">
              <div>
                <h2 className="text-sm font-medium text-gray-500">Phone</h2>
                <p>{branch.phone}</p>
              </div>
              <div>
                <h2 className="text-sm font-medium text-gray-500">Address</h2>
                <p>{branch.address}</p>
              </div>
              <div>
                <h2 className="text-sm font-medium text-gray-500">Map</h2>
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchDetailPage;
