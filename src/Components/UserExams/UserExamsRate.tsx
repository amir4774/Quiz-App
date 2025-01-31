import { Avatar, Box } from "@mui/material";
import useGetColors from "../../Hooks/useGetColors";

const UserExamsRate = ({ rate }: { rate: number }) => {
  const { borderColor } = useGetColors(rate);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 80,
        borderRadius: "50%",
        background: `conic-gradient(${borderColor} 0% ${rate}%, #fff ${rate}% 100%)`,
      }}
    >
      <Avatar
        sx={{
          bgcolor: "background.default",
          color: "text.secondary",
          width: 70,
          height: 70,
        }}
      >
        {rate}%
      </Avatar>
    </Box>
  );
};

export default UserExamsRate;
