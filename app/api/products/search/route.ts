import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prismaClient";

export async function GET(req: NextRequest) {
    console.log('req:', req.nextUrl.searchParams.get('query'));
    const query = req.nextUrl.searchParams.get('query') || '';

    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: query,
                mode: 'insensitive',
            }
        },
        take: 10,
    })

    return NextResponse.json(products);
}