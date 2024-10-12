import { mergeProps } from 'solid-js';

type Props = {
  /**
   * Value of stat.
   */
  value: number;

  /**
   * Label of the stat.
   */
  label: string;

  /**
   * Character(s) to show after or before the value.
   */
  extra?: string;

  /**
   * Indicates if the `extra` should be rendered before or after the value.
   * @default true
   */
  isPrefix?: boolean;
};

function Stat(rawProps: Props) {
  const props = mergeProps({ isPrefix: true }, rawProps);

  return (
    <div class="flex flex-col">
      <p class="font-semibold font-serif text-3xl">
        <small>{props.isPrefix && props.extra}</small>
        {props.value}
        <small>{!props.isPrefix && props.extra}</small>
      </p>
      <h3 class="font-semibold font-serif text-[18px]">{props.label}</h3>
    </div>
  );
}

export { Stat };
