import { Tooltip } from "antd";
import { useSize } from "ahooks";

function ScreenTooltip({
  children,
  ...restProps
}: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  const size = useSize(document.querySelector("body"));
  if (size && size?.width > 1024) {
    return <Tooltip {...restProps}>{children}</Tooltip>;
  }
  return <>{children}</>;
}

export default ScreenTooltip;
