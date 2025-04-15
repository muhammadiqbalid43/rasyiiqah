import { Button } from "../ui/button";

interface Props extends Meta {
  onPageChange: (page: string) => void;
}

export function Pagination({
  currentPage,
  totalItems,
  totalPages,
  onPageChange,
}: Props) {
  return (
    <div className="flex justify-between items-center">
      <div>Total data: {totalItems}</div>
      <div className="flex items-center justify-end mt-5 gap-5">
        <Button
          onClick={() => onPageChange(String(currentPage - 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>

        <span>Page {currentPage}</span>

        <Button
          onClick={() => onPageChange(String(currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
