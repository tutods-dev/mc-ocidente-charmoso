import { create, defineMigration } from 'sanity/migrate';

/**
 * Migration to change the structure of the `gallery` field for services.
 * @description Previously, the `gallery` is an object containing an array of images. But now, the gallery is only an array of images.
 * This migration handles the transition of all the images from the object to the new array.
 */
export default defineMigration({
  title: 'Rename services to services',
  documentTypes: ['project'],

  migrate: {
    document(doc) {
      const { type, _id, ...docInfo } = doc;
      return create({ ...docInfo, _type: 'service' });
    },
  },
});
