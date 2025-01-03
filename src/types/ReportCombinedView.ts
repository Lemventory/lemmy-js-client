// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommentReportView } from "./CommentReportView";
import type { PostReportView } from "./PostReportView";
import type { PrivateMessageReportView } from "./PrivateMessageReportView";

export type ReportCombinedView =
  | ({ type_: "Post" } & PostReportView)
  | ({ type_: "Comment" } & CommentReportView)
  | ({ type_: "PrivateMessage" } & PrivateMessageReportView);
