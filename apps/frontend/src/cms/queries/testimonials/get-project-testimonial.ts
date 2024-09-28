/**
 * Query to retrieve a testimonial from a specific project.
 */
const getProjectTestimonialQuery = `
    *[_type == "testimonial" && project->slug.current == $slug] [0] {
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

export { getProjectTestimonialQuery };
