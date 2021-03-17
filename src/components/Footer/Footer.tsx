import React from 'react';
import classNames from 'classnames';
import Branding from '../Branding/Branding';
import FooterEnd from '../FooterEnd/FooterEnd';
import { assetUrl, getItemPageNames, isMobileViewport } from '../../config';
import { Item } from '../../model';
import './footer.scss';
export default function Footer({ items, pageName }: { items: Item[]; pageName: string }) {
  return (
    <div className={classNames('footer', { 'is-hidden': !isMobileViewport() && getItemPageNames(items).includes(pageName) })}>
      <Branding modifier='footer' logoContent={<img src={assetUrl('logo.svg')} width='150px' height='60px' alt='' />}>
        <span className='footnote'>
          subshell is a flexible, tight-knit software company founded in 1999 with the goal of providing useful solutions to a variety of media organizations.
        </span>
      </Branding>
      <FooterEnd />
    </div>
  );
}
