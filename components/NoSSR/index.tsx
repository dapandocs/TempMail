import dynamic from "next/dynamic";
import React from "react";

const NoSSR = (props: {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}) => <React.Fragment>{props.children}</React.Fragment>;

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});