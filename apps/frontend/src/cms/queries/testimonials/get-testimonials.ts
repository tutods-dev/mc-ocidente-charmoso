/**
 * Query to retrieve a list of testimonials.
 * @param `$start` Offset (how many results should skip)
 * @param `$end` Limit (how much results retrieve)
 */
const getTestimonialsQuery = `
    *[_type == "testimonial"] [$start...$end}] | order(_createdAt) {
      _id,
      client,
      content,
      "url": coalesce(url, null),
      "project": coalesce(project->{
        title,
        "slug": slug.current,
      }, null), 
      _createdAt,
      _updatedAt
    }
`;

export { getTestimonialsQuery };
