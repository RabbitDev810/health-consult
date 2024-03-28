import "../../assets/styles/VisitTable.css";
import { Table } from "antd";
import { useEffect } from "react";
import { listInfos } from "../../graphql/queries";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../home/header";
import { API, graphqlOperation } from "aws-amplify";
import Loading from "../general/loading";
const columns = [
  {
    title: "Visitor ID",
    dataIndex: "visitorId",
    onFilter: (value, record) => record.title.indexOf(value) === 0,
  },
  {
    title: "Visitor's Name",
    dataIndex: "visitorName",
    onFilter: (value, record) => record.name.indexOf(value) === 0,
  },
  {
    title: "Encounter Date",
    dataIndex: "encounterDate",
    onFilter: (value, record) => record.date.indexOf(value) === 0,
  },
  {
    title: "",
    dataIndex: "button",
  },
];
const VisitTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getHistoryData();
  }, []);

  const getHistoryData = async () => {
    try {
      const infoData: any = await API.graphql(
        graphqlOperation(listInfos, {
          filter: {
            loggedInUserEmail: {
              eq: localStorage.getItem("email"),
            },
          },
        })
      );
      const items = infoData.data.listInfos.items;
      const formattedData = items.map((item) => ({
        key: item.id,
        visitorId: item.id,
        visitorName: item.name,
        encounterDate: item.date,
        // Add any other fields you need from the item
      }));
      setData(formattedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching history data:", error);
    }
  };
  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <section className="visit">
        <div>
          <Header toHome={true} />
        </div>
        {loading && (
          <div style={{ marginTop: "20px" }}>
            <Loading />
          </div>
        )}
        {!loading && (
          <div className="container visiter-tbl">
            <Table
              style={{ cursor: "pointer" }}
              columns={columns}
              dataSource={data}
              onChange={onChange}
              onRow={(record, rowIndex) => {
                return {
                  onClick: () => {
                    navigate(`/info/${record.visitorId}`);
                  },
                };
              }}
            />
          </div>
        )}
      </section>
    </>
  );
};
export default VisitTable;
