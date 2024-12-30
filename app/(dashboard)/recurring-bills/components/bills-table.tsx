"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BillColumnType } from "./columns";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: BillColumnType[];
}

export function BillsTable<TValue>({
  columns,
  data
}: DataTableProps<BillColumnType, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });
  const [isMounted, setIsMounted] = useState(false);

  const pageOptions = table?.getPageOptions();

  const handlePagination = (page: number) => {
    table.setPageIndex(page);
  };

  const currentPage = table.getState().pagination.pageIndex;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="border-none rounded-xl">
        <div className="flex max-xl:flex-col max-xl:items-end items-center justify-between w-full pb-10 gap-4">
          <div className="relative">
            <Input
              placeholder="Search bills"
              className="p-5 h-[45px] border-[#98908B] placeholder:max-lg:text-xs placeholder:text-sm w-full lg:min-w-[320px]"
              value={
                (table.getColumn("billTitle")?.getFilterValue() as string) ?? ""
              }
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                table.getColumn("billTitle")?.setFilterValue(event.target.value)
              }
            />

            <SearchIcon
              size={19}
              color="#696868"
              className="absolute top-3 right-4"
            />
          </div>

          <div className="flex max-sm:flex-col items-center gap-4">
            <Select
              defaultValue="asc"
              onValueChange={() => {
                const column = table?.getColumn("date");
                table
                  .getColumn("date")
                  ?.toggleSorting(column?.getIsSorted() === "asc");
              }}
            >
              <SelectGroup>
                <div className="flex items-center">
                  <SelectLabel className="text-[#696868] flex-nowrap font-normal">
                    Sort By
                  </SelectLabel>
                  <SelectTrigger className="w-[180px] border-[#98908B]">
                    <SelectValue defaultValue="asc" className="text-2xl" />
                  </SelectTrigger>
                </div>

                <SelectContent>
                  <SelectItem value="asc">Latest</SelectItem>
                  <SelectItem value="desc">Oldest</SelectItem>
                </SelectContent>
              </SelectGroup>
            </Select>
          </div>
        </div>

        <Table className="relative">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table?.getRowModel().rows?.length ? (
              table?.getRowModel().rows?.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between space-x-2 pt-10">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="border-[#98908B]"
        >
          <ChevronLeft />
          <span className="max-sm:hidden">Previous</span>
        </Button>

        <div className="flex flex-wrap items-center gap-3">
          {pageOptions?.map((page, index) => (
            <Button
              size="sm"
              key={index}
              onClick={() => handlePagination(page)}
              className={cn(
                "bg-transparent border-[1px] border-[#98908B] rounded-md text-base hover:bg-transparent text-[#201F24]",
                page === currentPage ? "bg-black text-white" : "bg-transparent"
              )}
            >
              {page + 1}
            </Button>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="border-[#98908B]"
        >
          <span className="max-sm:hidden">Next</span>
          <ChevronRight />
        </Button>
      </div>
    </>
  );
}
