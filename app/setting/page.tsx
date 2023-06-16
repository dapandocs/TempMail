"use client";

import Link from "next/link";
import { Card, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

function Setting() {
  return (
    <Card
      title="Setting"
      className="lg:w-[660px] lg:m-auto shadow-md"
      bodyStyle={{ padding: "12px 24px" }}
      extra={
        <Link href="/">
          <Button icon={<CloseOutlined />} />
        </Link>
      }
    >
      <div className="text-center mt-4 font-bold text-xl">Your Setting</div>
    </Card>
  );
}

export default Setting;
