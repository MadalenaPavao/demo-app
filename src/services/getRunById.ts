import { RUNS } from "../data/runs";

const getRunById = (id: string) => {
  return RUNS.hits.find((run) => run.id === id);
};
export default getRunById;
