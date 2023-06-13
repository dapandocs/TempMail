import ScreenTooltip from "./Tooltip";
import NoSSR from "@/components/NoSSR";

const Tooltip = ({
  children,
  ...restProps
}: {
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <NoSSR>
      <ScreenTooltip {...restProps}>{children}</ScreenTooltip>
    </NoSSR>
  );
};
export default Tooltip;
