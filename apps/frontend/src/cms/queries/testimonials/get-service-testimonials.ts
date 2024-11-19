/**
 * Query to retrieve a testimonial from a specific service.
 */
const getServiceTestimonialQuery = `
    *[_type == "testimonial" && service->slug.current == $slug] {
      _id,
      client,
      content,
      "url": coalesce(url, null),
      "service": coalesce(service->{
        title,
        "slug": slug.current,
      }, null), 
      _createdAt,
      _updatedAt
    }
`;

export { getServiceTestimonialQuery };
