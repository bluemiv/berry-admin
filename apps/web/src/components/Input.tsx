import { forwardRef, HTMLInputTypeAttribute } from 'react';
import classNames from 'classnames';
import { TPropsWithClassname } from '@/types';

interface TProps {
  type?: HTMLInputTypeAttribute;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, TPropsWithClassname<TProps>>((props, ref) => {
  const { label, className, type, ...restProps } = props;
  return (
    <div className={classNames('flex items-center gap-md', className)}>
      {!!label && <label>{label}</label>}
      <input
        className="bg-slate-100 rounded-md px-sm py-xs border border-transparent focus:border-slate-200 outline-none"
        ref={ref}
        {...restProps}
      />
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
