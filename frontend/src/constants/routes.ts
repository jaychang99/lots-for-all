import { GAMES, GAME_NAMES } from "./games";

interface Route {
  path: string;
  name: string;
}

export const NAV_ROUTES: Route[] = [
  {
    path: "/",
    name: "대시보드",
  },
  {
    path: "/pick",
    name: "추첨",
  },
  {
    path: "/presets",
    name: "프리셋 관리",
  },
  {
    path: "/groups",
    name: "명단 관리",
  },
];

export const GAME_ROUTES: Route[] = GAMES.map((game, idx) => ({
  path: `/pick/${game}`,
  name: GAME_NAMES[idx],
}));
