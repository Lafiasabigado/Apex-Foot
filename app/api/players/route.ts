import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://foot-api-0gcy.onrender.com/player?limit=8");
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des joueurs");
    }
    const data = await response.json();
    
    
    const cleanedResults = data.results.map((player: any) => ({
      ...player,
      image: player.image?.startsWith('http') ? player.image : `https://res.cloudinary.com${player.image}`
    }));

    return NextResponse.json(cleanedResults);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Une erreur inconnue est survenue" }, { status: 500 });
  }
}
