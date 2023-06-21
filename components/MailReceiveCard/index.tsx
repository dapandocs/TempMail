"use client";

import { Table } from "antd";
import { useHomeStore } from "@/store/home";
import type { TableColumnProps } from "antd";
import NoSSR from "@/components/NoSSR";
import Link from "next/link";

function MailReceiveCard() {
  const { mailingList, mailingListLoading } = useHomeStore();
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
      render: (t: string, row: Record<string, any>) => {
        return (
          <Link href={`/view?mailId=${row.id}`}>
            <div className="text-cyan-300 cursor-pointer">view</div>
          </Link>
        );
      },
    },
  ];
  return (
    <NoSSR>
      <div className="m-auto mt-4 lg:w-[1000px] shadow-lg">
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
          loading={mailingListLoading}
        />
      </div>
    </NoSSR>
  );
}

export default MailReceiveCard;
