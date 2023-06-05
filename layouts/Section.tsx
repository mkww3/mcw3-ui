import { ReactElement, ReactFragment } from 'react';

interface Props {
  id: string;
  className: string;
  children: any;
}

export const Section = ({id, className, children}: Props): any => {
  return (
    <section id={id} className={`w-full h-screen ${className}`}>
      {children}
    </section>
  );
};
