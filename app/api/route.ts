// Importando o módulo NextResponse do pacote next/server
import { NextResponse } from "next/server";

// Exportando a função GET assíncrona
export async function GET() {
  // Retornando uma resposta JSON com a propriedade "hello" igual a "World"
  return NextResponse.json({ hello: "World" });
}
