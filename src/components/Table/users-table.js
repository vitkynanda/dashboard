/* eslint-disable @next/next/no-img-element */
import MaterialTable from "@material-table/core";
// import { useState, useEffect } from "react";
// import { CircularProgress, Box } from "@mui/material";
import tableIcons from "utils/mui-table-icons";
// import AddTargetModal from "./AddTargetModal";
// import { getSalesData } from "service/api";

const UsersTable = () => {
  // const [salesData, setSalesData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [update, setUpdate] = useState(false);

  // const fetchSalesData = async () => {
  //   setIsLoading(true);

  //   const data = await getSalesData();

  //   if (data?.status === 200) {
  //     setSalesData(data.data);
  //   }

  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   fetchSalesData();
  // }, [update]);

  // const renderLoading = isLoading ? (
  //   <Box
  //     sx={{
  //       display: "flex",
  //       justifyContent: "start",
  //       padding: "10px",
  //       borderRadius: 2,
  //       backgroundColor: "white",
  //       marginBottom: 1,
  //     }}
  //   >
  //     <div className="flex space-x-3 items-center w-full bg-blue-100 p-4 rounded-md">
  //       <CircularProgress size={20} />
  //       <p className="text-gray-500 text-sm ">Updating data ...</p>
  //     </div>
  //   </Box>
  // ) : null;
  return (
    <>
      {/* {renderLoading} */}
      <MaterialTable
        localization={{
          toolbar: {
            searchPlaceholder: "Search Table",
          },
        }}
        icons={tableIcons}
        title="Sales Target Table"
        columns={[
          {
            title: "User",
            field: "name",
            render: (rowData) => (
              <p>
                {/* {rowData.name?.slice(0, 1).toUpperCase() +
                  rowData.name.slice(1)} */}
              </p>
            ),
          },
          {
            title: "Photo",
            field: "image",
            render: (rowData) =>
              rowData.image !== null ? (
                <div>
                  <img
                    src={rowData.image}
                    alt="user"
                    className="w-28 h-28 rounded-full object-cover"
                  />
                </div>
              ) : (
                <img
                  src="/beard.png"
                  alt="sales"
                  className="w-24 rounded-full"
                />
              ),
          },
          {
            title: "Target",
            field: "target",
            render: (rowData) => (
              <p className="text-sm">
                {/* {!rowData.target
                  ? "Target not set"
                  : "IDR " + rowData.target?.toLocaleString("id-ID")} */}
              </p>
            ),
          },
          {
            title: "Sales",
            field: "sales",
            render: (rowData) => (
              <p className="text-sm">
                {/* {!rowData.sale
                  ? "No Data"
                  : "IDR " + rowData.sale?.toLocaleString("id-ID")} */}
              </p>
            ),
          },

          {
            title: "Action",
            field: "action",
            render: (rowData) => (
              <></>
              // <AddTargetModal sales={rowData.name} setUpdate={setUpdate} />
            ),
          },
        ]}
        data={[]}
        options={{
          exportButton: true,
          pageSizeOptions: [15, 20],
          pageSize: 15,
          searchFieldPlaceholder: "Search Table",
        }}
      />
    </>
  );
};

export default UsersTable;
