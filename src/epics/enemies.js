import { FETCH_ENEMIES, setEnemies } from "ducks/enemies";
import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";

const fetchEnemiesEpic = action$ =>
  action$.pipe(
    ofType(FETCH_ENEMIES),
    mergeMap(async () => {
      const response = await fetch("http://localhost:3001/enemies");
      const { data } = await response.json();
      return setEnemies(data);
    })
  );

export { fetchEnemiesEpic };
