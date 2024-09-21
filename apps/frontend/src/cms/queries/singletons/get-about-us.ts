/**
 * Query to retrieve the about us page.
 */
const getAboutUsQuery = `
    *[_type == "about-us"] [0] {
        ...,
        "process": select(defined(process) => {
            ...process,            
            "thumbnail": select(defined(process.thumbnail) => {
                ...process.thumbnail,
                "asset": process.thumbnail.asset->
           }),
        }),
        "aboutUs": select(defined(aboutUs) => {
            ...aboutUs,            
            "thumbnail": select(defined(aboutUs.thumbnail) => {
                ...aboutUs.thumbnail,
                "asset": aboutUs.thumbnail.asset->
           }),
        }),
        "factory": select(defined(factory) => {
            ...factory,            
           "gallery": coalesce(factory.gallery[] {
                ...,
                "asset": asset->
            }, [])
        }) 
    }
`;

export { getAboutUsQuery };
