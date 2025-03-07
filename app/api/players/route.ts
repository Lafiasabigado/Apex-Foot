import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const apiToken = process.env.API_TOKEN;

    if (!apiToken) {
      throw new Error("Le token API est manquant !");
    }

    const response = await fetch(`${apiUrl}/player?limit=8`, {
      headers: {
        "Authorization": `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
    });

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
