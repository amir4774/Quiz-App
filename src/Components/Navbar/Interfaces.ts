export interface LoginTooltipProps {
  title: "Login" | "Logout";
  isLogin: boolean;
}

export interface LoginButtonProps extends Omit<LoginTooltipProps, "isLogin"> {}

export interface LoginListItemProps
  extends Omit<LoginTooltipProps, "isLogin"> {}

export interface NavTitleProps {
  text: string;
  spanText: string;
}
