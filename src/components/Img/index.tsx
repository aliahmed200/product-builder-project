interface Iprops {
  imageUrl: string;
  alt: string;
  className: string;
}

const index = ({ imageUrl, alt, className }: Iprops) => {
  return <img src={imageUrl} alt={alt} className={className} />;
};

export default index;
