import type { ImageWithAlt } from '~/shared/types';
import type { Settings as SettingsSchema } from '~/shared/types/sanity.types';

type Settings = Omit<SettingsSchema, 'thumbnail'> & {
  thumbnail?: ImageWithAlt;
};

type CtaSettings = SettingsSchema['cta'];

type SocialNetworks = SettingsSchema['social'];

type Contacts = SettingsSchema['contacts'];

export type { Settings, Contacts, SocialNetworks, CtaSettings };
