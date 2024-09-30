// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommunityId } from "./CommunityId";
import type { ListingType } from "./ListingType";
import type { PersonId } from "./PersonId";
import type { PostSortType } from "./PostSortType";
import type { SearchType } from "./SearchType";

export interface Search {
  q: string;
  community_id?: CommunityId;
  community_name?: string;
  creator_id?: PersonId;
  type_?: SearchType;
  sort?: PostSortType;
  listing_type?: ListingType;
  page?: number;
  limit?: number;
  title_only?: boolean;
  post_url_only?: boolean;
  saved_only?: boolean;
  liked_only?: boolean;
  disliked_only?: boolean;
}
