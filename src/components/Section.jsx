const Section = ({
  id,
  className,
  children,

}) => {
  return (
    <div className={` ${className}`} id={id}>
      {children}
    </div>
  );
};

export default Section;
