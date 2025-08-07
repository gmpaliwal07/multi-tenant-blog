"use client";
import Nav from "@/app/components/nav";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import * as React from "react";
import { useOrganization } from "@clerk/nextjs";

import { createBlog } from "./actions";
export default function OrgLandingPage() {
  const [blogContent, setBlogContent] = React.useState<string>("");

  const [blogTitle, setBlogTitle] = React.useState<string>("");
  const selectedOrganization = useOrganization();

  const handleCreateBlog = async () => {
    if(!selectedOrganization.organization?.id) {
        return;
    }
    await createBlog({
      title: blogTitle.trim(),
      body: blogContent.trim(),
      orgId: selectedOrganization.organization?.id,
    });
  };
  return (
    <>
      <Nav />
      <main className=" flex flex-col items-center justify-center ">
        <div>
          <h1 className="text-2xl font-bold p-10">
            Welcome to the Organization Page
          </h1>
          <Input
            placeholder="Blog title here..."
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
          />
          <Textarea
            value={blogContent}
            placeholder="Write your blog content here..."
            onChange={(e) => setBlogContent(e.target.value)}
            className="mt-5"
          />
          <Button className="mt-2" onClick={handleCreateBlog}>Create Blog </Button>
        </div>
      </main>
    </>
  );
}
