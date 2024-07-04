import { deletePost, getById, updatePost } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  console.log("Get");
  // get a post by id
  try {
    const id = req.url.split("blogs/")[1];
    const post = getById(id);
    if (!post) {
      return NextResponse.json({ message: "Error", post }, { status: 404 });
    }
    return NextResponse.json({ message: "OK", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

export const PUT = async (req: Request) => {
  console.log("PUT");
  // update a post by id
  try {
    const { title, desc } = await req.json();
    const id = req.url.split("blogs/")[1];
    updatePost(id,title,desc);
    return NextResponse.json({message:"Ok"},{status:200})

  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
}
  
};

export const DELETE = async (req: Request) => {
  console.log("DELETE");
  // delete a post by id
  try {
    const id = req.url.split("blogs/")[1];
    deletePost(id);
    return NextResponse.json({message:"Ok"},{status:200})

  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
}
};
