"use server";

export async function addTaskToServer(title: string) {
  console.log("Server received:", title);

  await new Promise((res) => setTimeout(res,300));

  return {success: true};
  
}