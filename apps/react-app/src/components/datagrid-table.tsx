import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface TableProps<T> {
  cols: GridColDef[];
  rows: T[];
}

const Table = <T,>({ cols, rows }: TableProps<T>) => (
  <DataGrid
    rows={rows}
    columns={cols}
    initialState={{
      pagination: {
        paginationModel: { page: 0, pageSize: 9 },
      },
    }}
    density="comfortable"
    autoHeight
    disableRowSelectionOnClick
    pageSizeOptions={[5, 9, 15, 25]}
    sx={{
      marginTop: "5px",
      width: "100%",
      border: "none",
      "& .MuiDataGrid-cell": {
        border: "none",
        color: "black",
        fontWeight: 400,
        width: "100%",
        textAlign: "center",
      },
      "& .MuiDataGrid-columnHeaders": {
        backgroundColor: "primary.light",
        borderRadius: "10px",
        border: "none",
        alignItems: "center",
      },
      "& .MuiDataGrid-columnHeaderTitle": {
        fontWeight: 800,
        color: "black",
      },
      "& .MuiDataGrid-row": {
        border: "none",
        "&:nth-of-type(even)": {
          backgroundColor: "#F5F5F5",
          borderRadius: "10px",
        },
        "&:nth-of-type(odd)": {
          backgroundColor: "white",
          borderRadius: "10px",
        },
        "&:nth-of-type(odd):hover": {
          backgroundColor: "white",
          borderRadius: "10px",
        },
      },
    }}
    getRowId={(row) => row.id || row.code || row.promoType}
  />
);

export default Table;
