import React from "react";
import Rating from "react-rating";
import { FaCircle, FaCircleNotch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

const SearchResult = () => {
  const searchData = useSelector((state) => state.searchData.data);
  const searchText = useSelector((state) => state.searchData.searchText);
  // console.log(searchData)
  const [currentPage, setCurrentPage] = useState(0)
  console.log(currentPage)
  const totalSearchData = searchData.length
  console.log(totalSearchData)
  const dataPerPages = 5;
  const totalPages = Math.ceil(totalSearchData / dataPerPages)
  const pageNumbers = [...Array(totalPages).keys()]

  return (
    <div className="bg-base-300 pt-12">
        <div className="md:w-[80%] w-full bg-base-100 rounded-tl-lg rounded-tr-lg">
          <div className="border-t border-x p-4 ">
            <h4 className="text-xl font-semibold">Search results matching "{searchText}"</h4>
          </div>
          {
            searchData.slice(currentPage * dataPerPages, (currentPage + 1) * dataPerPages).map(data => <div key={data._id} className=" hover:shadow-2xl  w-full border flex items-center ">
            <figure className="  md:p-5 p-3">
              <Link to={`/searchResult/${data._id}`}> <img
                className="md:w-[210px] sm:w-[200px] w-[190px] md:h-[150px] sm:h-[140px] h-[130px] rounded-[2px] "
                src={data?.picture}
                alt="restaurants"
              /></Link>
            </figure>
            <div className="md:p-5 p-3 ">
              <Link to={`/searchResult/${data._id}`}><h3 className="text-2xl mb-3 font-semibold">{data.hotelName ? data.hotelName : data.title}</h3></Link>
              <div className="flex space-x-2 ">
                <p className="text-green-600 ">
                  <Rating
                    placeholderRating={4.5}
                    emptySymbol={
                      <FaCircleNotch className="w-4"></FaCircleNotch>
                    }
                    placeholderSymbol={<FaCircle className="w-4"></FaCircle>}
                    fullSymbol={<FaCircle className="w-4 "></FaCircle>}
                    readonly
                  />
                </p>
                <p className="text-sm border-b-[2px] border-dotted p-0">
                  109 review
                </p>
              </div>
              <p className="">
                Country : {data?.address?.country}
              </p>
              <p>
              {data?.address?.state}, {data?.address?.street}, {data?.address?.city} 
              </p>
            </div>
          </div>)
          }
          
        </div>
        <div className="flex justify-center gap-2 mb-12">
          {
            pageNumbers.map(number =>  <button key={number} onClick={()=>setCurrentPage(number)} className={`${currentPage === number ? "bg-green-600 py-2  px-4 rounded-full font-semibold  border-2 text-white border-teal-600 bg-teal-600" : " px-4 rounded-full font-semibold  py-2 border-2 border-teal-600"}`}>{number}</button>)
          }
        </div>
    </div>
  );
};

export default SearchResult;