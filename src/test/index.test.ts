import { genererMotDePasse } from "../index";

describe("Générateur de mot de passe", () => {
  test("Générer un mot de passe à partir de TypeScript", () => {
    expect(genererMotDePasse("TypeScript")).toEqual("TyP3ScR1Pt10");
  });

  test("Mademoiselle", () => {
    expect(genererMotDePasse("Générer un mot de passe à partir de Mademoiselle")).toEqual("M@D3M01s3lL312");
  });
});
