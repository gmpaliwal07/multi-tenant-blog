import { db } from "@/db";
import { blogTable } from "@/db/schema";
import { clerkClient } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

interface Params {
  subdomain: string;
}
export default async function HomePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const {} = await params;
  const client =await clerkClient();

  const org = await client.organizations.getOrganization({slug : (await params).subdomain});
  const orgId = org?.id;

 const blogs = await db.select().from(blogTable).where(eq(blogTable.orgId, orgId))

 return (
    <div className="p-10 ">
        {blogs.map((blog) => (
            <div key={blog.id} className="p-4 border-b">
                <h2 className="text-xl font-bold">{blog.title}</h2>
                <p className="text-gray-700">{blog.body}</p>
            </div>
        ))}
    </div>
 )
}
