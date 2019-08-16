import { FETCH_WEAPONS, setWeapons } from "ducks/weapons";
import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import NProgress from "nprogress";
const fetchWeaponsEpic = action$ =>
  action$.pipe(
    ofType(FETCH_WEAPONS),
    mergeMap(async () => {
      NProgress.start();
      const response = await fetch("http://localhost:3001/weapons");
      const { data } = await response.json();
      NProgress.done();
      return setWeapons(data);
    })
  );

export { fetchWeaponsEpic };
