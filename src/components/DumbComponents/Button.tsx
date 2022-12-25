import classNames from 'classnames';
import React from 'react';

function Button({
  title,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  const buttonClassNames = classNames(
    className,
    ' py-2 px-4 w-full bg-transparent hover:bg-blue-500  font-semibold text-white border border-blue-500 hover:border-transparent rounded',
    {
      'disabled:text-gray-600': props.disabled,
      'disabled:cursor-not-allowed': props.disabled,
      'disabled:opacity-50': props.disabled,
    }
  );

  return (
    <button {...props} className={buttonClassNames}>
      {title}
    </button>
  );
}

export default Button;
