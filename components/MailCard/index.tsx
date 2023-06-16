"use client";
import { useEffect } from "react";
import Tooltip from "@/components/Tooltip";
import { Card, Button } from "antd";
import Link from "next/link";
import {
  CopyOutlined,
  EditOutlined,
  RetweetOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useHomeStore } from "@/store/home";

function MailCard() {
  const { fetchEmail } = useHomeStore();

  useEffect(() => {
    fetchEmail();
  });

  return (
    <Card
      title={null}
      className="lg:w-[660px] lg:m-auto shadow-md"
      bodyStyle={{ padding: "12px 24px" }}
    >
      <div className="text-center mt-4 font-bold text-xl">
        Your Temporary Email Address
      </div>
      <div className="flex justify-center mt-6">
        <Tooltip title="Your temporary email address" placement="left">
          <div className="w-60 h-10 lg:h-12 text-lg bg-slate-600 rounded-3xl flex items-center pl-4">
            rijepo4946@peogi.com
          </div>
        </Tooltip>
        <Tooltip title="Copy to clipboard" placement="right">
          <Button
            icon={<CopyOutlined />}
            shape="circle"
            className="!w-10 h-10 lg:h-12 lg:!w-12 ml-4"
          />
        </Tooltip>
      </div>
      <div className="pb-8 mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Tooltip title="Copy" placement="left">
          <Button
            icon={<CopyOutlined />}
            className="h-10 lg:h-12 text-lg shadow-md"
          >
            Copy
          </Button>
        </Tooltip>
        <Tooltip title="Change" placement="bottom">
          <Button
            icon={<EditOutlined />}
            className="h-10 lg:h-12 text-lg shadow-md"
          >
            Change
          </Button>
        </Tooltip>
        <Tooltip title="Refresh" placement="bottom">
          <Button
            icon={<RetweetOutlined />}
            className="h-10 lg:h-12 text-lg shadow-md"
          >
            Refresh
          </Button>
        </Tooltip>
        <Link href="/setting">
          <Tooltip title="Setting" placement="right">
            <Button
              icon={<SettingOutlined />}
              className="h-10 lg:h-12 text-lg shadow-md w-full"
            >
              Setting
            </Button>
          </Tooltip>
        </Link>
      </div>
    </Card>
  );
}

export default MailCard;
