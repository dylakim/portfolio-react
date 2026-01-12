import classNames from 'classnames';

import { ButtonLink, type ButtonLinkProps } from 'basics/buttonLink/buttonLink';

interface ButtonGroupProps {
  buttons: ButtonLinkProps[];
  className?: string;
}

export function ButtonGroup({ buttons, className }: ButtonGroupProps) {
  return (
    buttons?.length && (
      <div className={classNames(className, 'horizontalFlex')}>
        {buttons.map((buttonProps) => (
          <ButtonLink key={buttonProps.label} {...buttonProps} />
        ))}
      </div>
    )
  );
}
