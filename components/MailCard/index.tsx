"use client";

import { Tooltip } from "antd";
import { CopyOutlined, EditOutlined, RetweetOutlined } from "@ant-design/icons";

function MailCard() {
  return (
    <div className="border-2 border-sloid border-slate-100 rounded-lg border-opacity-10 h-60 lg:w-[600px] m-auto mt-8 shadow-md">
      <div className="text-center mt-4 font-bold text-xl">
        Your Temporary Email Address
      </div>
      <div className="flex justify-center mt-6">
        <Tooltip title="Your temporary email address" placement="left">
          <div className="w-60 h-12 bg-slate-600 rounded-2xl flex items-center pl-4">
            rijepo4946@peogi.com
          </div>
        </Tooltip>
        <Tooltip title="Copy to clipboard" placement="right">
          <div className="w-12 h-12 bg-slate-200 hover:bg-white rounded-full ml-4 flex justify-center items-center cursor-pointer">
            <CopyOutlined className="text-2xl text-slate-600" />
          </div>
        </Tooltip>
      </div>
      <div className="flex justify-center mt-8 text-xl text-slate-600">
        <Tooltip title="Copy" placement="left">
          <div className="h-12 bg-slate-200 rounded-3xl flex justify-center items-center cursor-pointer pl-4 pr-4 shadow hover:bg-white">
            <CopyOutlined />
            <span className="ml-2">Copy</span>
          </div>
        </Tooltip>
        <Tooltip title="Change" placement="bottom">
          <div className="h-12 bg-slate-200 rounded-3xl flex justify-center items-center cursor-pointer pl-4 pr-4 shadow hover:bg-white ml-6 mr-6">
            <EditOutlined />
            <span className="ml-2">Change</span>
          </div>
        </Tooltip>
        <Tooltip title="Refresh" placement="right">
          <div className="h-12 bg-slate-200 rounded-3xl flex justify-center items-center cursor-pointer pl-4 pr-4 shadow hover:bg-white">
            <RetweetOutlined />
            <span className="ml-2">Refresh</span>
          </div>
        </Tooltip>
      </div>
    </div>
  );
}

export default MailCard;
