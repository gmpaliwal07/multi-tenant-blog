'use server';



import { blogTable,CreateBlogType } from "@/db/schema";

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

 const db = drizzle(process.env.DATABASE_URL!);



export const createBlog = async (payload : CreateBlogType) => { 
   const result =  await db.insert(blogTable).values(payload).returning();
    return result;
}