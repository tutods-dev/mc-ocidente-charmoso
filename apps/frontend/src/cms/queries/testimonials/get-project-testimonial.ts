import groq from 'groq';

/**
 * Query to retrieve a testimonial from a specific project.
 */
const getProjectTestimonialQuery = groq`
    *[_type == "testimonial" && project->slug.current == $slug] [0] {
      _id,
      client,
      content,
      "url": coalesce(url, null),
      _createdAt,
      _updatedAt
    }
`;

export { getProjectTestimonialQuery };
