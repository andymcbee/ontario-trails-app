import React, { useEffect, useState } from "react";

export const Pagination = ({
  handleClickBack,
  handleClickNext,
  paginationData,
}) => {
  console.log(paginationData.pagination);
  const { page, pageSize, pageCount, total } = paginationData?.pagination;

  const [firstItemNum, setFirstItemNum] = useState(0);
  const [lastItemNum, setLastItemNum] = useState(0);

  //How to calculate the current range we're looking at?

  useEffect(() => {
    if (page === pageCount) {
      setLastItemNum(total);
      setFirstItemNum(total - (total % pageSize) + 1);

      /*  console.log("LAST ITEM NUM ON PAGE:::::");
      console.log(total);

      console.log("FIRST ITEM NUM ON PAGE3333::::");
      console.log(total - (total % pageSize) + 1); */
    } else {
      setLastItemNum(page * pageSize);
      setFirstItemNum(page * pageSize - pageSize + 1);
      /*  console.log(page * pageSize - pageSize + 1);

      console.log("LAST ITEM NUM ON PAGE:::::");
      console.log(page * pageSize);

      console.log("FIRST ITEM NUM ON PAGE::::");
      console.log(page * pageSize - pageSize + 1); */
    }
  }, [page, pageSize, pageCount, total]);

  return (
    <div>
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing
          <span className="font-semibold text-gray-900 dark:text-white">
            {firstItemNum}
          </span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {lastItemNum}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {total}
          </span>{" "}
          Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={page !== 1 ? () => handleClickBack(page) : null}
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="mr-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            Prev
          </button>
          <button
            onClick={page !== pageCount ? () => handleClickNext(page) : null}
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
            <svg
              aria-hidden="true"
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
