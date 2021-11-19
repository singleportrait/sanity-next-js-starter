import classNames from 'classnames';

import Button from './Button';
import Divider from './Divider';

const CallToAction = ({
  title = 'Get in touch',
  text,
  buttonText = 'Email me',
  email,
  className,
}) => (
  <div className={classNames({
    'max-w-xs flex flex-col mt-4 mb-12': true,
    [className]: !!className,
  })}
  >
    <Divider />
    <h2 className="mb-6">
      {title}
    </h2>
    {text && (
      <p className="mb-8">
        {text}
      </p>
    )}
    <a href={`mailto:${email}`}>
      <Button message={buttonText} />
    </a>
  </div>

);

export default CallToAction;
