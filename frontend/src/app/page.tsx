"use client";

import { Layout } from "antd";
import Nav from "@/app/components/Nav";
import Contents from "@/app/components/Contents";

export default function Home() {

  return (
    <main className="text-white">
      <Layout className="h-screen">
        <Nav />
        <Contents />
      </Layout>
    </main>
  );
}
