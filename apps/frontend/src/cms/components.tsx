import type { PortableTextComponents } from '@portabletext/solid';

const components: Partial<PortableTextComponents> = {
  block: {
    normal: ({ children }) => (
      <p class="my-2 overflow-hidden break-words leading-relaxed first-of-type:mt-0 last-of-type:mb-0">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => <ul class="list-disc space-y-1 pl-6">{children}</ul>,
    number: ({ children }) => <ol class="list-decimal space-y-1 pl-6">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <a
          class="underline"
          href={value?.href}
          target={value?.target && '_blank'}
          rel={value?.target ? 'nofollow' : undefined}
        >
          {children}
        </a>
      );
    },
  },
};

export { components };
