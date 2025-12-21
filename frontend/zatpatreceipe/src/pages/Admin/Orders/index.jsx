import React, { useEffect, useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import "../../../styles/Admin/Orders/index.css";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

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
    fetch("http://localhost:5000/get-orders", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setData(res.orders);
        }
      });
  }, []);

  const orderStats = useMemo(() => {
    const stats = {
      total: data.length,
      pending: 0,
      baking: 0,
      sent_for_delivery: 0,
      completed: 0,
    };

    data.forEach((order) => {
      switch (order.status) {
        case "pending":
          stats.pending++;
          break;
        case "baking":
          stats.baking++;
          break;
        case "sent_for_delivery":
          stats.sent_for_delivery++;
          break;
        case "completed":
          stats.completed++;
          break;
        default:
          break;
      }
    });

    return stats;
  }, [data]);

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
      <div className="orders-page_header">
        <h2>Orders</h2>
        <ul className="orders-page_orderRecord">
          <li className="orders-page_orderRecord_item total">
            <p>Total Orders</p>
            <p>{orderStats.total}</p>
          </li>

          <li className="orders-page_orderRecord_item pending">
            <p>Pending</p>
            <p>{orderStats.pending}</p>
          </li>

          <li className="orders-page_orderRecord_item baking">
            <p>Baking</p>
            <p>{orderStats.baking}</p>
          </li>

          <li className="orders-page_orderRecord_item delivery">
            <p>Sent for Delivery</p>
            <p>{orderStats.sent_for_delivery}</p>
          </li>

          <li className="orders-page_orderRecord_item completed">
            <p>Completed</p>
            <p>{orderStats.completed}</p>
          </li>
        </ul>
      </div>

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
            <tr
              id="data-row"
              key={row.id}
              onClick={() =>
                navigate(`/admin-dashboard/order/${row.original.id}`)
              }
            >
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

export default Orders;
