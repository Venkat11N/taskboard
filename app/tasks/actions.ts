"use server";

import {prisma} from "@/lib/db";
import {revalidatePath} from "next/cache";

export async function createTask(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  
  await prisma.task.create({
    data: {
      title,
      description,
    },
  });
  
  revalidatePath("/tasks");
} 

