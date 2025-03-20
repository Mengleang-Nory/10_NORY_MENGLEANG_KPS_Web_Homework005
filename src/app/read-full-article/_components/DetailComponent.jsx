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
        <h2 className="text-[#0B3954] text-[26px] font-[600]">{titleDetail}</h2>
        <h3 className="my-4 text-[22px] font-[600]">
          by <span className="text-[#087E8B] ">{authorName}</span>
        </h3>
        {viewDetail ? (
          <div className="flex text-[#087E8B]  mb-4 text-[20px] font-[600]">
            <span className="flex items-center">
              <svg
                className="mr-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9999 16.33C9.60992 16.33 7.66992 14.39 7.66992 12C7.66992 9.61 9.60992 7.67 11.9999 7.67C14.3899 7.67 16.3299 9.61 16.3299 12C16.3299 14.39 14.3899 16.33 11.9999 16.33ZM11.9999 9.17C10.4399 9.17 9.16992 10.44 9.16992 12C9.16992 13.56 10.4399 14.83 11.9999 14.83C13.5599 14.83 14.8299 13.56 14.8299 12C14.8299 10.44 13.5599 9.17 11.9999 9.17Z"
                  fill="#087E8B"
                />
                <path
                  d="M12.0001 21.02C8.24008 21.02 4.69008 18.82 2.25008 15C1.19008 13.35 1.19008 10.66 2.25008 9C4.70008 5.18 8.25008 2.98 12.0001 2.98C15.7501 2.98 19.3001 5.18 21.7401 9C22.8001 10.65 22.8001 13.34 21.7401 15C19.3001 18.82 15.7501 21.02 12.0001 21.02ZM12.0001 4.48C8.77008 4.48 5.68008 6.42 3.52008 9.81C2.77008 10.98 2.77008 13.02 3.52008 14.19C5.68008 17.58 8.77008 19.52 12.0001 19.52C15.2301 19.52 18.3201 17.58 20.4801 14.19C21.2301 13.02 21.2301 10.98 20.4801 9.81C18.3201 6.42 15.2301 4.48 12.0001 4.48Z"
                  fill="#087E8B"
                />
              </svg>
            </span>
            <h3>{viewDetail}</h3>
            <span className="mx-2">|</span>
            <h3>{splitYear(publishedYear)}</h3>
          </div>
        ) : (
          ""
        )}

        <p className="text-[#0B3954]">{description}</p>
      </article>
    </section>
  );
};
