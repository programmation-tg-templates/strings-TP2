# Chaines de caractères - TP2 - Générateur de mot de passe

## Consignes

Crée une fonction `genererMotDePasse` qui :
- Convertit les lettres paires en majuscules, les impaires en minuscules.
- Remplace les lettres "a", "e", "i", "o" par @, 3, 1, 0.
- Ajoute la longueur du mot à la fin.



**Signature de la fonction :**

```ts
function genererMotDePasse(base: string): string
```

## Exemples

- `genererMotDePasse("TypeScript")` doit retourner `TyP3ScR1Pt10`
- `genererMotDePasse("Mademoiselle")` doit retourner `M@D3M01s3lL312`
