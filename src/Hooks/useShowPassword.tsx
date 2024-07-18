import { useState } from "react";

const useShowPassword = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  const OnClick = () => {
    setValue(!value);
  };

  return { value, OnClick };
};

export default useShowPassword;
