function ShowcaseMemeImage({
  ...props
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) {
  return (
    <img
      {...props}
      className={
        ' flex justify-center h-64 w-64 ml-auto mr-auto mt-5 object-contain mb-8'
      }
    />
  );
}

export default ShowcaseMemeImage;
