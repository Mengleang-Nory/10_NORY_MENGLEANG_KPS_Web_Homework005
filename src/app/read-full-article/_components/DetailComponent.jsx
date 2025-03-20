export const DetailComponent = ({
  image,
  titleDetail,
  authorName,
  viewDetail,
  publishedYear,
  description,
}) => {
  const splitYear = (published_year) => {
    return published_year.split("-")[0];
  };
  return (
    <section className="w-[1760px] min-h-[630px] ml-[80px] mt-[250px] bg-white rounded-t-4xl p-[80px] relative">
      <div className=" absolute top-[-150px] right-[80px] h-[500px] w-[315px] rounded-4xl overflow-hidden">
        <img className="w-[100%] h-[100%]" src={image} alt="" />
      </div>
      <article className="mt-[200px]">
        <h2>{titleDetail}</h2>
        <h3 className="my-5">
          by <span>{authorName}</span>
        </h3>
        <h3>{viewDetail}</h3>
        <h3>{splitYear(publishedYear)}</h3>
        <p>{description}</p>
      </article>
    </section>
  );
};
