import { NextResponse } from "next/server";

async function fetchWithAuth(url: string) {
  let accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  const refreshToken = process.env.NEXT_PUBLIC_REFRESH_TOKEN;

  let response = await fetch(url, {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  if (response.status === 401) {
    console.log("🔄 Token expiré, tentative de rafraîchissement...");

    const refreshResponse = await fetch("https://foot-api-0gcy.onrender.com/api/token/refresh/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    if (refreshResponse.ok) {
      const refreshData = await refreshResponse.json();
      accessToken = refreshData.access;

      console.log("✅ Nouveau token récupéré :", accessToken);

      // Refaire la requête avec le nouveau token
      response = await fetch(url, {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
    } else {
      console.log("❌ Échec du rafraîchissement du token.");
    }
  }

  return response.json();
}

export async function GET() {
  try {
    const data = await fetchWithAuth("https://foot-api-0gcy.onrender.com/player?limit=8");

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
