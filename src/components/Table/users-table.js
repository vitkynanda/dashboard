import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { deleteUserData, getListUsers } from "constants/services/api";
import { useQuery, useMutation, useQueryClient } from "react-query";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Chip, IconButton, Tooltip } from "@mui/material";
import { toast } from "react-toastify";

// const VISIBLE_FIELDS = ["name"];

export default function UsersTable() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery("users", getListUsers);
  const { mutate: deleteUser } = useMutation((id) => deleteUserData(id), {
    onSuccess: (res) => {
      if (res.statusCode === 200) {
        toast.success("User Deleted");
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
      field: "role",
      headerName: "Role",
      width: 200,
      renderCell: (params) => {
        return <p className="capitalize">{params.value.title}</p>;
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
            <Tooltip title="Delete Users">
              <IconButton onClick={() => handleDelete(params.row.id)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit Users">
              <IconButton onClick={() => handleEdit(params.row.id)}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </div>
        );
      },
    },
  ];

  const handleEdit = (id) => {
    console.log(id);
  };
  const handleDelete = (id) => {
    console.log(id);
    deleteUser(id);
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
