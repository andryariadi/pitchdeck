import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(`
   *[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {
  _id, 
  title,
  slug, 
  category, 
  views, 
  description, 
  author -> {
    _id, name, email, username, image, bio
  },
  image, 
  pitch, 
  _createdAt
}
`);
