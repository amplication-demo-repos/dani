import { Ddd as TDdd } from "../api/ddd/Ddd";

export const DDD_TITLE_FIELD = "dadasd";

export const DddTitle = (record: TDdd): string => {
  return record.dadasd || String(record.id);
};
