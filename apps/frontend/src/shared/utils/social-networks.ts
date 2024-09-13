import { SocialNetworks } from '~/shared/enums';

function getSocialNetworkIcon(socialNetwork: SocialNetworks) {
  switch (socialNetwork) {
    case SocialNetworks.BEHANCE:
      return 'bx bxl-behance';

    case SocialNetworks.DRIBBLE:
      return 'bx bxl-dribbble';

    case SocialNetworks.FACEBOOK:
      return 'bx bxl-facebook';

    case SocialNetworks.INSTAGRAM:
      return 'bx bxl-instagram';

    case SocialNetworks.TWITTER:
      return 'bx bxl-twitter';

    case SocialNetworks.LINKEDIN:
      return 'bx bxl-linkedin';

    case SocialNetworks.YOUTUBE:
      return 'bx bxl-youtube';

    case SocialNetworks.WEBSITE:
      return 'ph ph-globe';
    default:
      return '';
  }
}

function getSocialNetworkLabel(socialNetwork: SocialNetworks) {
  switch (socialNetwork) {
    case SocialNetworks.BEHANCE:
      return 'Behance';

    case SocialNetworks.DRIBBLE:
      return 'Dribble';

    case SocialNetworks.FACEBOOK:
      return 'Facebook';

    case SocialNetworks.INSTAGRAM:
      return 'Instagram';

    case SocialNetworks.TWITTER:
      return 'Twitter';

    case SocialNetworks.LINKEDIN:
      return 'LinkedIn';

    case SocialNetworks.YOUTUBE:
      return 'YouTube';

    case SocialNetworks.WEBSITE:
      return 'Website';
    default:
      return '';
  }
}

export { getSocialNetworkIcon, getSocialNetworkLabel };
