import type { SocialNetworks as SocialNetworksEnum } from '~/shared/enums';
import type { ImageWithAlt } from '~/shared/types';
import type { Settings as SettingsSchema } from '~/shared/types/sanity.types';

type Settings = Omit<SettingsSchema, 'thumbnail'> & {
  thumbnail?: ImageWithAlt;
};

type CtaSettings = SettingsSchema['cta'];

type SocialNetworks = Array<
  Omit<NonNullable<SettingsSchema['social']>[number], 'network'> & {
    network: SocialNetworksEnum;
  }
>;

type Contacts = NonNullable<SettingsSchema['contacts']>;

type SocialNetworksAndContacts = {
  contacts?: Contacts;
  social?: SocialNetworks;
};

type SeoSettings = Pick<Settings, 'title' | 'description' | 'keywords' | 'thumbnail'>;

export type {
  Settings,
  CtaSettings,
  SeoSettings,
  Contacts,
  SocialNetworks,
  SocialNetworksAndContacts,
};
