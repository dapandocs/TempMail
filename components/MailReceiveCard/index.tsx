"use client";

import { Table } from "antd";
import { useHomeStore } from "@/store/home";
import type { TableColumnProps } from "antd";
import NoSSR from "@/components/NoSSR";

function MailReceiveCard() {
  const { mailingList } = useHomeStore();
  console.log("mailingList", mailingList);

  const columns: TableColumnProps<any>[] = [
    {
      dataIndex: "from",
      title: "SENDER",
      ellipsis: true,
      align: "center",
      width: "30%",
    },
    {
      dataIndex: "subject",
      title: "SUBJECT",
      ellipsis: true,
      align: "center",
      width: "50%",
    },
    {
      title: "View",
      align: "center",
      width: "20%",
      render: () => {
        return <div className="text-cyan-300 cursor-pointer">view</div>;
      },
    },
  ];
  return (
    <NoSSR>
      <div className="m-auto mt-4 lg:w-[1000px]">
        <Table
          rowKey="id"
          columns={columns}
          dataSource={mailingList}
          pagination={false}
          bordered
          locale={{
            emptyText: (
              <div className="text-white">Waiting for incoming emails</div>
            ),
          }}
        />
      </div>
    </NoSSR>
  );
}

export default MailReceiveCard;
