import classNames from 'classnames';
import ButtonBlobNarrow from './icons/ButtonBlobNarrow';
import ButtonBlobWide from './icons/ButtonBlobWide';

const Button = ({
  onClick,
  message,
  className,
  type = 'button',
}) => {
  const messageLength = message.length;
  const charsBreakpoint = 15;

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
      className={classNames({
        'relative py-1.5 px-3 xs:px-4 font-light group hover:cursor-pointer focus:outline-none': true,
        [className]: !!className,
      })}
    >
      <div
        className="text-primary-dark-transparent group-hover:text-primary-dark-transparent-hover group-focus-visible:text-primary-dark-transparent-hover transition-colors absolute left-0 right-0 top-0 bottom-0 w-full h-full"
      >
        {messageLength < charsBreakpoint && (
          <ButtonBlobNarrow />
        )}
        {messageLength >= charsBreakpoint && (
          <ButtonBlobWide />
        )}
      </div>

      <span className="relative">
        {message}
      </span>
    </button>
  );
};

export default Button;
