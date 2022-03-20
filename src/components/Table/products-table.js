import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { deleteProductData, getProductList } from "constants/services/api";
import { useQuery, useMutation, useQueryClient } from "react-query";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Chip, IconButton, Tooltip } from "@mui/material";
import { toast } from "react-toastify";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export default function ProductsTable() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery("products", getProductList);
  const { mutate: deletProduct } = useMutation((id) => deleteProductData(id), {
    onSuccess: (res) => {
      if (res.statusCode === 200) {
        toast.success("Product");
        queryClient.invalidateQueries("users");
      } else {
        toast.error(res.error);
      }
    },
  });

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 200,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: (params) => {
        return <p className="capitalize">{params.value}</p>;
      },
    },
    {
      field: "active",
      headerName: "User Status",
      width: 200,
      renderCell: (params) => {
        return (
          <Chip
            label={params.value ? "Active" : "Inactive"}
            color={params.value === true ? "success" : "default"}
          />
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex space-x-2">
            <Tooltip title="Detail Products">
              <IconButton onClick={() => handleDetail(params.row.id)}>
                <RemoveRedEyeIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete Product">
              <IconButton onClick={() => handleDelete(params.row.id)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit Product">
              <IconButton onClick={() => handleEdit(params.row.id)}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </div>
        );
      },
    },
  ];

  const handleDetail = (id) => {};
  const handleEdit = (id) => {};
  const handleDelete = (id) => {
    deletProduct(id);
  };

  return (
    <div style={{ height: 500, width: "100%" }}>
      {!isLoading && (
        <DataGrid
          onCellClick={(params, event) => {
            event.defaultMuiPrevented = true;
          }}
          checkboxSelection
          columns={columns}
          rows={data?.data}
          components={{ Toolbar: GridToolbar }}
        />
      )}
    </div>
  );
}
