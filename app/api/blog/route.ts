import { createClient } from "@/utils/supabase/client";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const supabase = await createClient();

        const { data, error } = await supabase.from("blogs").select();

        if (error) {
            throw error;
        }

        console.log(data);

        return NextResponse.json({ message: "Success", data }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    } finally {
    }
};

export const POST = async (req: Request) => {
    try {
        const supabase = await createClient();

        const {description, content} = await req.json();

        const { data, error } = await supabase
            .from("blogs")
            .insert({ description, content })
            .select();

        if (error) {
            throw error;
        }

        console.log(data);

        return NextResponse.json({ message: "Success", data }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    } finally {
    }
};
