import {
  createAction,
  createReducer,
  createAsyncThunk,
  combineReducers,
} from "@reduxjs/toolkit";

export async function GetEnum(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const json = await response.json();
    return json;
}

function CreateFetchers(name, proto) {
  return Object.keys(proto).reduce((acc, key) => {
    const thunk = proto[key];
    return {
      ...acc,
      [key]: createAsyncThunk(`${name}/fetch/${key}`, thunk),
    };
  }, {});
}

function CreateAction(name, keys) {
  return [...new Set(keys)].reduce(
    (acc, key) => ({
      ...acc,
      [key]: createAction(`${name}/${key}`),
    }),
    {}
  );
}

export const Fetcher = CreateFetchers("test", {
  async initial() {
      const response = await GetEnum();
      console.log(response);
    return {
      showTest: true,
    };
  },
});

export const Action = CreateAction("test", ["setOperatorData"]);

console.log(Action);

const INIT = {
  showTest: false,
};
const Reducer = createReducer(INIT, ({ addCase }) => {
  addCase(Fetcher.initial.fulfilled, (state) => ({ ...state, showTest: true }));
  addCase(Action.setOperatorData, (state) => ({ ...state, showTest: true, action:"action" }));

});

export default combineReducers({
  test: Reducer,
});
