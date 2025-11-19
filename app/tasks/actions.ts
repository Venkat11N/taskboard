"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createTask(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const status = (formData.get("status") as string) || "todo";

  await prisma.task.create({
    data: { title, description, status },
  });

  revalidatePath("/tasks");
}

export async function updateTask(formData: FormData) {
  const id = Number(formData.get("id"));
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const status = formData.get("status") as string | "pending";

  await prisma.task.update({
    where: { id },
    data: { title, description, status },
  });

  revalidatePath("/tasks");
}

export async function deleteTask(formData: FormData) {
  const id = Number(formData.get("id"));

  await prisma.task.delete({
    where: { id },
  });

  revalidatePath("/tasks");
}
