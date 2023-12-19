import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Chart from "react-apexcharts";
import userContext from "../Context/userContext";
import { useContext } from "react";

function Graph() {
  const [excelData, setExcelData] = useState({});
  const { GraphData } = useContext(userContext);

useEffect(() => {
  if (GraphData && Object.keys(GraphData).length > 0 && GraphData.District_Capacity) {
    const districtNames = Object.keys(GraphData.District_Capacity);
    const supplyData = Object.values(GraphData.District_Capacity);
    const demandData = districtNames.map(
      (district) => GraphData.District_Demand[district]
    );
    setExcelData({
      names: districtNames,
      supply: supplyData,
      demand: demandData,
    });
  }
}, [GraphData]);


  const chartData = {
    height: 480,
    type: "bar",
    options: {
      chart: {
        id: "bar-chart",
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
        },
      },
      xaxis: {
        type: "category",
        categories: excelData.names || [],
      },
      yaxis: {
        labels: {
          style: {
            colors: "black",
          },
          formatter: function (value) {
            return value.toFixed(0);
          },
        },
      },
      legend: {
        show: true,
        fontSize: "14px",
        position: "bottom",
        labels: {
          useSeriesColors: false,
        },
        markers: {
          width: 16,
          height: 16,
          radius: 5,
        },
        itemMargin: {
          horizontal: 15,
          vertical: 8,
        },
      },
      fill: {
        type: "solid",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: true,
        borderColor: "#ccc",
      },
      tooltip: {
        theme: "light",
      },
    },
    series: [
      {
        name: "Supply",
        data: excelData.supply ,
      },
      {
        name: "Demand",
        data: excelData.demand ,
      },
    ],
  };

  return (
    <>
      <div
        style={{
          width: "60vw",
          backgroundColor: "white",
          margin: "5vh 20px 20px 20px",
          borderRadius: 8,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {excelData.names && excelData.names.length > 0 ? (
              <Chart {...chartData} style={{ padding: "20px" }} />
            ) : (
              <div>Loading chart data...</div>
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Graph;
