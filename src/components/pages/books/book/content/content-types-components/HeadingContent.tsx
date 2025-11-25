import { FC } from "react";

interface IProps {
  children: any;
  level: number;
  pageNumber: number;
}

export const HeadingContent: FC<IProps> = ({ children, level, pageNumber }) => {
  switch (level) {
    case 1:
      return (
        <h1
          tabIndex={0} id={`content-${pageNumber}`}
          className="text-[2.25em] font-semibold block"
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 tabIndex={0} id={`content-${pageNumber}`} className="text-[2em] font-semibold block">
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 tabIndex={0} id={`content-${pageNumber}`} className="text-[1.5em] font-semibold block">
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 tabIndex={0} id={`content-${pageNumber}`} className="text-[1.25em] font-medium block mb-1">
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 tabIndex={0} id={`content-${pageNumber}`} className="text-[1em] font-medium block">
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 tabIndex={0} id={`content-${pageNumber}`} className="text-[1em] font-medium block">
          {children}
        </h6>
      );
    default:
      return (
        <h4 tabIndex={0} id={`content-${pageNumber}`} className="text-[1.25em] font-medium block mb-1">
          {children}
        </h4>
      );
  }
};
