import { createClient } from "@/utils/supabase/client";
import { NextResponse } from "next/server";

export const PUT = async (
    req: Request,
    { params }: { params: { id: string } },
) => {
    try {
        const supabase = await createClient();

        const { id } = await params;

        const { description, content } = await req.json();

        const { data, error } = await supabase
            .from("blogs")
            .update({ description, content })
            .eq("id", id)
            .select();

        if (error) {
            throw error;
        }

        return NextResponse.json({ message: "Success", data }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    } finally {
    }
};
export const DELETE = async (
    { params }: { params: { id: string } },
) => {
    try {
        const supabase = await createClient();

        const { id } = await params;

        const { data, error } = await supabase
            .from("blogs")
            .delete()
            .eq("id", id)
            .select();

        if (error) {
            throw error;
        }

        return NextResponse.json({ message: "Success", data }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    } finally {
    }
};