import { useLoaderData } from "react-router-dom";

const SearchResultDetails = () => {
  const single = useLoaderData() 
  console.log(single)
  return (
    <div>
      <h1>{single?.title}</h1>
    </div>
  );
};

export default SearchResultDetails;
