import React, { useEffect, useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import "../../../styles/Admin/Orders/index.css";

const Order = () => {
  const [data, setData] = useState([]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  useEffect(() => {
    fetch("http://localhost:5000/get-orders")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setData(res.orders);
        }
      });
  }, []);

  const columns = useMemo(
    () => [
      {
        header: "Order Date",
        accessorKey: "created_at",
        cell: ({ getValue }) => formatDate(getValue()),
      },
      {
        header: "Customer",
        accessorKey: "cust_name",
      },
      {
        header: "Address",
        accessorKey: "address",
      },
      {
        header: "Phone",
        accessorKey: "number",
      },
      {
        header: "Pincode",
        accessorKey: "pincode",
      },
      {
        header: "Transaction ID",
        accessorKey: "transactionID",
      },

      {
        header: "Items",
        cell: ({ row }) => (
          <ul className="order-items">
            {row.original.order.map((item, index) => (
              <li key={index}>
                {item.title} ({item.weight}g) × {item.quantity} — ₹{item.price}
              </li>
            ))}
          </ul>
        ),
      },
      {
        header: "Amount",
        accessorKey: "amount",
        cell: ({ getValue }) => `₹${getValue()}`,
      },
      {
        header: "Status",
        accessorKey: "status",
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    initialState: {
      pagination: {
        pageSize: 10, // 👈 records per page
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="orders-page">
      <h2>Orders</h2>

      <table className="orders-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted()] ?? null}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Prev
        </button>
        <span>
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Order;
