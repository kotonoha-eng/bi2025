// src/components/LineChart.tsx
"use client";

import { ResponsiveLine } from "@nivo/line";

export type Point = {
  id: string;
  value: number;
};

export type LineChartProps = {
  points: Point[];
};

export function LineChart(props: LineChartProps) {
  const series = [
    {
      id: "sales",
      data: props.points.map((p) => ({
        x: p.id,
        y: p.value,
      })),
    },
  ];

  return (
    <div style={{ height: 400 }}>
      <ResponsiveLine
        data={series}
        margin={{
          top: 20,
          right: 20,
          bottom: 60,
          left: 60,
        }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", stacked: false }}
        axisBottom={{
          tickRotation: -45,
        }}
        enablePoints={true}
        useMesh={true}
      />
    </div>
  );
}
