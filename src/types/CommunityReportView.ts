// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Community } from "./Community";
import type { CommunityAggregates } from "./CommunityAggregates";
import type { CommunityReport } from "./CommunityReport";
import type { Person } from "./Person";
import type { SubscribedType } from "./SubscribedType";

/**
 * A community report view.
 */
export type CommunityReportView = {
  community_report: CommunityReport;
  community: Community;
  creator: Person;
  counts: CommunityAggregates;
  subscribed: SubscribedType;
  resolver?: Person;
};
