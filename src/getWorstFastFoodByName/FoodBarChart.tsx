import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

type FoodBarChartProps = {
  data: Record<string, string | number>;
  width?: number;
  height?: number;
};

export default function FoodBarChart({
  data,
  width,
  height,
}: FoodBarChartProps) {
  return (
    <BarChart width={width ?? 500} height={height ?? 300} data={data}>
      <XAxis
        dataKey={(itemData) => itemData.restaurant + ": " + itemData.item}
        tickLine={false}
      />
      <YAxis dataKey={"total_fat"} />
      <Tooltip />
      <Legend />
      <Bar dataKey="total_fat" fill="red" name="Total Fat" />
      <Bar dataKey="sugar" fill="orange" name="Sugar" />
    </BarChart>
  );
}
