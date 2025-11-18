import { NextResponse } from "next/server";
import {prisma} from "@/lib/db";

export async function GET(
  re: Request,
  {params} : {params: {id: string}}
) {
  const task = await db.task.findUnique({
    where: {id: Number(params.id)},

  });

  return NextResponse.json(task);
}

