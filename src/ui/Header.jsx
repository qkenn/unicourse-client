import { useState } from 'react';
import SiteLogo from './SiteLogo';
import DesktopNav from './navigation/DesktopNav';
import HamMenu from './navigation/HamMenu';
import MobileNav from './navigation/MobileNav';
import clsx from 'clsx';

export function Header() {
  const [hamSelected, setHamSelected] = useState(false);

  return (
    <>
      <header
        className={clsx('z-30 bg-neutral-950 py-3', {
          'fixed left-0 right-0 top-0': hamSelected,
          relative: !hamSelected,
        })}
      >
        <div className="mx-auto flex max-w-main items-center justify-between px-5 xl:px-0">
          <SiteLogo />
          <DesktopNav />
          <HamMenu
            hamSelected={hamSelected}
            toggleHamMenu={() => setHamSelected((h) => !h)}
          />
        </div>
      </header>

      <MobileNav
        hamSelected={hamSelected}
        closeHamMenu={() => setHamSelected(false)}
      />
    </>
  );
}
