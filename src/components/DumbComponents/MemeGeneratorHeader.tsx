interface MemeGeneratorProps {
  projectName: string;
}

interface MemeGeneratorHeaderInterface
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >,
    MemeGeneratorProps {}

function MemeGeneratorHeader({ projectName }: MemeGeneratorHeaderInterface) {
  return (
    <header className=' justify-center font-bold flex p-3 text-white text-2xl mt-3 '>
      {projectName}
    </header>
  );
}

export default MemeGeneratorHeader;
