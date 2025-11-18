import { prisma } from "@prisma/client";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: {createdAt: "desc"},
    });

    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json({error: "Failed to fetch tasks"}, {status: 500});
  }
}