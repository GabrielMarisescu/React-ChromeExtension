function MemeGeneratorHeader({
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {
  return (
    <header className=' justify-center font-bold flex p-3 text-white text-2xl mt-3 '>
      {props.title}
    </header>
  );
}

export default MemeGeneratorHeader;
