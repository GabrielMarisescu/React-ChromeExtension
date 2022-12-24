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
        ' flex justify-center h-52 w-52 ml-auto mr-auto mt-5 object-contain'
      }
    />
  );
}

export default ShowcaseMemeImage;
