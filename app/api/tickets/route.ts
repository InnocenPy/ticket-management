import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const schema = z.object({
    title: z.string().min(1).max(224),
    description: z.string().min(1)
});

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const newTicket = await prisma.ticket.create({
        data: { title: body.title, description: body.description }
    });

    return NextResponse.json(newTicket, { status: 201 });
}

// Ajoutez une méthode GET pour vérifier si la route fonctionne
export async function GET() {
    return NextResponse.json({ message: "Route works!" }, { status: 200 });
}
