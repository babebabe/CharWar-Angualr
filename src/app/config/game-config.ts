export const PLAYGROUND_SIZE = 4;
export const MAX_GENERATED_CARD = 9;

// export const CARD_VALUE = {
//   empty: "",
//   1: "1",
//   2: "2",
//   3: "3",
//   4: ""
// };

export const EVENT_TYPE = {
  playgroundCardsChanged: "PlaygroundCardsChanged",
  candidateCardsChanged: "CandidateCardsChanged"
};

export const ARROW = {
  LEFT_UP: [-1, -1],
  UP: [0, -1],
  RIGHT_UP: [1, -1],
  LEFT: [-1, 0],
  RIGHT: [1, 0],
  LEFT_DOWN: [-1, 1],
  DOWN: [0, 1],
  RIGHT_DOWN: [1, 1]
};
