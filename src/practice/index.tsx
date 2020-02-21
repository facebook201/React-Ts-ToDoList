import * as React from 'react';

interface IProps {
  /**
   * logo 地址
   */
  logo?: string
  alt?: string
};

const Logo: React.FC<IProps> = props => {
  const { logo} = props;

  return (
    <div>
      <img src={logo} />
    </div>
  )
};

export default Logo
