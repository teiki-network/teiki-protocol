import getTeikiPlantV from "@/contracts/meta-protocol/teiki-plant.v/main";

import { compileAndLog } from "../base";

test("compile: V | Teiki Plant", () => {
  const size = compileAndLog(getTeikiPlantV({ teikiPlantNftMph: "" }));
  expect(size).toBeGreaterThan(0);
});
