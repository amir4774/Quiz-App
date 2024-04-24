import { useMemo } from "react";
import { useTheme } from "@mui/material";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import useStore from "../../Zustand/Store";
import useResult from "../../Hooks/useResult";

const COLORS = ["#00C49F", "#f00", "#ddd"];

const Chart = () => {
  const theme = useTheme();
  const { result } = useStore();
  const { ommited } = useResult();

  const data = useMemo(() => {
    return [
      { name: "Correct", value: result.correct },
      { name: "Incorrect", value: result.incorrect },
      { name: "Omitted", value: ommited },
    ];
  }, []);

  return (
    <PieChart
      width={300}
      height={300}
      style={{ maxWidth: "100%", margin: "0 auto" }}
    >
      <Pie data={data} innerRadius={70} outerRadius={100} dataKey="value">
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      <Tooltip
        active
        itemStyle={{
          fontFamily: "Arial",
          color: theme.palette.text.secondary,
        }}
        contentStyle={{
          backgroundColor: theme.palette.background.default,
          borderRadius: "7px",
          border: "none",
        }}
        allowEscapeViewBox={{ x: true, y: true }}
      />
    </PieChart>
  );
};

export default Chart;
