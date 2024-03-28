import exp from "constants";
import { UUID } from "crypto";

export type StatementType = {
  completed_statement: string;
  partial_statement: string;
  speaker_id: string;
  speaker_name?: string;
};

export type ConversationType = {
  id?: UUID;
  statements: Array<StatementType>;
};

export type MessageType = {
  completed_statement: string;
  partial_statement: string;
  speaker_id: string;
  speaker_name: string;
};
