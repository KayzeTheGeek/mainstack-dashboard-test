import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Chart from "chart.js/auto";

const Wrapper = styled.div`
  .graph_header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;

    & > * {
      flex: 50%;
    }
  }


  @media screen and (max-width: 770px) {
    margin-bottom: 30px;
  }

  .title {
    font-size: 0.8em;
  }

  .price {
    @media screen and (max-width: 770px) {
      font-size: 1.2em;
    }
  }

  .graph_container {
    width: 100%;
    height: 250px;
  }
`;
const Button = styled.button`
  width: 60px;
  padding: 5px 0;
  margin-bottom: 9px;
  text-align: center;
  margin-right: 9px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  background-color: transparent;

  &.active {
    background-color: ${({ theme }) => theme.pallette.primary};
    color: #fff;
  }
`;

export default function Graph() {
  const [active, setActive] = useState("Day");
  const graphRef = useRef(null);

  useEffect(() => {
    const ctx = graphRef.current.getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            data: [
              12, 19, 3, 5, 2, 3, 20, 10, 12, 14, 19, 3, 5, 2, 3, 20, 10, 12,
              14,
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            min: 0,
            max: 20,
            stepSize: 1,
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, ticks) {
                switch (value) {
                  case 0:
                    return "0k ";

                  case 2:
                    return "1k";
                  case 6:
                    return "5k";
                  case 10:
                    return "10k";
                  case 20:
                    return "20k";
                  default:
                    return undefined;
                }
              },
            },
          },
        },
        tension: 0.9,
        plugins: { legend: { display: false } },
      },
    });
  }, []);

  return (
    <Wrapper>
      <div className="graph_header">
        <div className="balance">
          <p className="title">My Balance</p>
          <h1 className="price">$5,750.20</h1>
        </div>

        <div className="button_container">
          <Button
            className={active === "Day" && "active"}
            onClick={() => setActive("Day")}
          >
            Day
          </Button>
          <Button
            className={active === "Week" && "active"}
            onClick={() => setActive("Week")}
          >
            Week
          </Button>
          <Button
            className={active === "Month" && "active"}
            onClick={() => setActive("Month")}
          >
            Month
          </Button>
          <Button
            className={active === "Year" && "active"}
            onClick={() => setActive("Year")}
          >
            Year
          </Button>
        </div>
      </div>
      <div className="graph_container">
        <canvas ref={graphRef}></canvas>
      </div>
    </Wrapper>
  );
}
