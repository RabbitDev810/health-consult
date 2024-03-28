import { Box, IconButton, Typography } from "@mui/material";
import {
  History as HistoryIcon,
  Launch,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { getTimeShort, getDateMedium } from "@/helper-functions";
import Table from "@/components/datagrid-table";
import type { VisitTableRecord } from "@/types";
import { TopBar } from "./create-visit";
import { useDrawerContext } from "@/hooks/useDrawer";

const Header = () => {
  return (
    <Box className="flex flex-col gap-[8px] w-full h-fit max-h-[calc(100svh-20px)] relative top-0 lg:sticky lg:top-[10px] ml-0 m-[10px]">
      <Box className="w-full h-fit bg-main p-20 md:px-[120px] pt-40 pb-[180px] rounded-[15px] text-white overflow-clip">
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "44px", sm: "60px" },
            lineHeight: { xs: "50px", sm: "60px" },
            mb: "30px",
            position: "relative",
            zIndex: "1",
          }}
        >
          Visits History
        </Typography>
        <Typography
          component="p"
          sx={{
            mt: "20px",
            fontWeight: "300",
            fontSize: "15px",
            opacity: "0.8",
            position: "relative",
            zIndex: "1",
          }}
        >
          Here you can find all the information about your visits, your
          appointments, your prescriptions.
        </Typography>
        <HistoryIcon
          sx={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            opacity: "10%",
            fontSize: "600px",
            color: "primary.light",
            zIndex: "0",
          }}
        />
      </Box>
      <Box
        className="hidden lg:block relative w-full h-fit bg-blue-100 p-20 rounded-[15px] text-dark overflow-clip cursor-pointer hover:bg-blue-200 transition-all duration-300 ease-in-out"
        component="a"
        href="/create-visit"
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "24px", sm: "30px" },
            lineHeight: { xs: "30px", sm: "40px" },
          }}
        >
          Create a new visit
        </Typography>
        <Typography
          component="p"
          sx={{
            mt: "10px",
            fontWeight: "300",
            fontSize: "15px",
            opacity: "0.8",
          }}
        >
          Here you can find all the information about your visits, your
          appointments, your prescriptions.
        </Typography>
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            color: "primary.main",
          }}
        >
          <KeyboardArrowRight
            sx={{
              fontSize: "60px",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

const getRandomTimeStamp = () => {
  const start = new Date(2020, 0, 1);
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toLocaleDateString();
};

const generateRandomRows = (count: number): VisitTableRecord[] => {
  const rows: VisitTableRecord[] = [];

  for (let i = 1; i < count + 1; i++) {
    rows.push({
      id: i.toString(),
      vistorName: `Visitor ${i}`,
      encounterDate: getRandomTimeStamp(),
    });
  }

  return rows;
};

const VisitsTable = ({
  onSelectCallback,
}: {
  onSelectCallback: (uuid: string) => void;
}) => {
  const { isLeftDrawerOpen, isRightDrawerOpen } = useDrawerContext();
  const statusHeader: GridColDef[] = [
    { field: "id", headerName: "Visit ID", flex: 1 },
    { field: "vistorName", headerName: "Visitor Name", flex: 1 },
    {
      field: "encounterDate",
      headerName: "Encounter Date",
      flex: 1,
      valueFormatter: ({ value }) => {
        return value
          ? `${getDateMedium(value as string)} ${getTimeShort(value as string)}`
          : "";
      },
    },
    {
      field: "actions",
      type: "actions",
      headerName: "",
      width: 100,
      cellClassName: "actions",
      getActions: ({ row }) => [
        <GridActionsCellItem
          icon={<Launch />}
          label="View Visit details"
          onClick={() => onSelectCallback(row.id as string)}
          color="inherit"
          sx={{
            bgcolor: "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        />,
      ],
    },
  ];

  // const [rows, setRows] = useState<VisitTableRecord[]>(generateRandomRows(100));

  return (
    <Box className="h-full mt-0 " maxWidth={isLeftDrawerOpen ? "83vw" : "95vw"}>
      <Table<VisitTableRecord>
        cols={statusHeader}
        rows={generateRandomRows(100)}
      />
    </Box>
  );
};

const History = () => {
  const { isLeftDrawerOpen, isRightDrawerOpen } = useDrawerContext();
  return (
    <Box
      className="bg-gray-50 p-5"
      display={"flex"}
      sx={{
        gap: "20px",
        minWidth: isLeftDrawerOpen ? "85vw" : "95vw",
      }}
      flexDirection={"column"}
    >
      <TopBar />
      <VisitsTable
        onSelectCallback={(uuid: string) => {
          console.log(uuid);
        }}
      />
    </Box>
  );
};

export default History;
