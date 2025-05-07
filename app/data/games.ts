export type Game = {
  teamA: string;
  teamB: string;
  date: string;
  prediction: string;
};

export const footballGames: Game[] = [
  {
    teamA: "Manchester United",
    teamB: "Chelsea",
    date: "2024-06-10 19:00 UTC",
    prediction: "Manchester United Win (2-1)",
  },
  {
    teamA: "Real Madrid",
    teamB: "Barcelona",
    date: "2024-06-12 20:00 UTC",
    prediction: "Draw (1-1)",
  },
];

export const tennisGames: Game[] = [
  {
    teamA: "Novak Djokovic",
    teamB: "Carlos Alcaraz",
    date: "2024-06-11 15:00 UTC",
    prediction: "Djokovic in 3 sets",
  },
  {
    teamA: "Iga Swiatek",
    teamB: "Aryna Sabalenka",
    date: "2024-06-13 17:00 UTC",
    prediction: "Swiatek in 2 sets",
  },
];

export const basketballGames: Game[] = [
  {
    teamA: "Lakers",
    teamB: "Warriors",
    date: "2024-06-14 02:00 UTC",
    prediction: "Lakers Win (110-104)",
  },
  {
    teamA: "Celtics",
    teamB: "Bulls",
    date: "2024-06-15 01:00 UTC",
    prediction: "Celtics Win (98-90)",
  },
]; 