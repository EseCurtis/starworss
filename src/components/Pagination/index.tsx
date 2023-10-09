import React, { useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { StateType } from "@/store/initalState";
import DomCondition from "../DomCondition";

const paginationButtonClass = "border border-white/20 p-3 ";

export default function Pagination({ urlPattern = "/" }: { urlPattern?: any}) {
  const paginationData = useSelector(
    (state: StateType) => state.paginationData
  );
  const charactersFetchStatus = useSelector(
    (state: StateType) => state.charactersFetchStatus
  );

  if (!paginationData || paginationData.count < 1) {
    // Handle the case when pagination data is not available or count is less than 1
    return null; // You can return an empty component or some loading indicator
  }

  const { currentPage, count } = paginationData;

  // Calculate the numbers to display based on the current page and count
  let pagesToDisplay = [currentPage];
  if (count >= 3) {
    if (currentPage > 1) pagesToDisplay.unshift(Number(currentPage) - 1);
    if (currentPage < count) pagesToDisplay.push(Number(currentPage) + 1);
  }

  return (
    <>
      <DomCondition
        condition={
          charactersFetchStatus == "SUCCESS" || charactersFetchStatus == "ERROR"
        }
      >
        <div className="grid grid-cols-5 gap-2 ">
          {currentPage > 1 && (
            <Link
              className={paginationButtonClass}
              to={`${urlPattern}${Number(currentPage) - 1}`}
            >
              {"<"}
            </Link>
          )}

          {pagesToDisplay.map((page) => (
            <Link
              key={page}
              className={`${paginationButtonClass} ${
                page === currentPage ? "font-bold" : ""
              }`}
              to={`${urlPattern}${page}`}
            >
              {page}
            </Link>
          ))}

          {currentPage < count && (
            <Link
              className={paginationButtonClass}
              to={`${urlPattern}${Number(currentPage) + 1}`}
            >
              {">"}
            </Link>
          )}
        </div>
      </DomCondition>
      <DomCondition condition={charactersFetchStatus == "LOADING"}>
        <div className="animate-pulse grid grid-cols-5 text-transparent gap-2">
          {
            [1,2,3, 4, 5].map((j, i) => (
                <Fragment key={i}>
                    <div className={paginationButtonClass}>0</div>
                </Fragment>
            ))
          }
        </div>
      </DomCondition>
    </>
  );
}


//https://swapi.dev/api/people/?search=r2