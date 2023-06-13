"use client";

import { Table, ConfigProvider } from "antd";
import type { TableColumnProps } from "antd";

const data = [
  {
    id: 1,
    from: "Google",
    subject: "Google Verification Code",
  },
  {
    id: 2,
    from: "Facebook",
    subject: "Facebook Verification Code",
  },
];

function MailReceiveCard() {
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
    <div className="m-auto mt-6 pl-2 pr-2 lg:w-[1000px]">
      <ConfigProvider
        theme={{
          components: {
            Table: {
              colorBgContainer: "transparent",
              colorText: "#fff",
              colorTextHeading: "#fff",
              colorBorderSecondary: "rgb(244 245 249 / 0.2)",
            },
          },
        }}
      >
        <Table
          rowKey="id"
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
          locale={{
            emptyText: (
              <div className="text-white">Waiting for incoming emails</div>
            ),
          }}
        />
      </ConfigProvider>
    </div>
  );
}

export default MailReceiveCard;
