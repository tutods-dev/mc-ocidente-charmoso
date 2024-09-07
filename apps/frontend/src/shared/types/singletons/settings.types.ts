import type { SocialNetworks as SocialNetworksEnum } from '~/shared/enums';
import type { ImageWithAlt } from '~/shared/types';
import type { Settings as SettingsSchema } from '~/shared/types/sanity.types';

type Settings = Omit<SettingsSchema, 'thumbnail'> & {
  thumbnail?: ImageWithAlt;
};

type CtaSettings = SettingsSchema['cta'];

type SocialNetworks = SettingsSchema['social'];

type Contacts = SettingsSchema['contacts'];

type SocialNetworksAsEnum = Array<{
  network: SocialNetworksEnum;
  link?: string;
  _type: 'social';
  _key: string;
}>;

type SocialNetworksAndContacts = {
  contacts?: Contacts;
  social?: SocialNetworks;
};

export type {
  Settings,
  Contacts,
  SocialNetworks,
  CtaSettings,
  SocialNetworksAndContacts,
};
