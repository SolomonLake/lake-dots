import { AddPlayerAction } from "./playersActionTypes";

export const addPlayer = ({ name }: { name: string }): AddPlayerAction => ({
  type: "ADD_PLAYER",
  player: { name, id: "id-" + Date.now().toString() },
});
