"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Card, Button, Spin } from "antd";
import { useSearchParams } from "next/navigation";
import { CloseOutlined } from "@ant-design/icons";
import { useHomeStore } from "@/store/home";

function View() {
  const searchParams = useSearchParams();
  const mailId = searchParams.get("mailId");

  const { mailContent, mailContentLoading, viewEmail } = useHomeStore();

  useEffect(() => {
    if (mailId) {
      viewEmail(mailId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mailId]);

  return (
    <Card
      title="View"
      className="lg:w-[770px] lg:m-auto shadow-md"
      bodyStyle={{ padding: 0, background: "#fff" }}
      extra={
        <Link href="/">
          <Button icon={<CloseOutlined />} />
        </Link>
      }
    >
      <div className="text-center mt-4 font-bold text-xl min-h-[200px] flex items-center justify-center">
        {mailContentLoading ? (
          <Spin />
        ) : (
          <div
            dangerouslySetInnerHTML={{
              __html: mailContent || "",
            }}
          />
        )}
      </div>
    </Card>
  );
}

export default View;
