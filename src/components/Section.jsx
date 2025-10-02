const Section = ({
  id,
  className = "",
  children,
  as = "section",
  ...props
}) => {
  const Component = as;
  
  return (
    <Component 
      id={id} 
      className={`relative ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Section;