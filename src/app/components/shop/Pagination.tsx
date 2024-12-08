import React from 'react';
import Link from 'next/link';

const Pagination = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-base h-10">
          <li>
            <Link href="#">
              <span className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-blue border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
                Previous
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="flex items-center justify-center px-4 h-10 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                1
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="flex items-center justify-center px-4 h-10 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                2
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span aria-current="page" className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">
                3
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="flex items-center justify-center px-4 h-10 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                4
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="flex items-center justify-center px-4 h-10 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                5
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="flex items-center justify-center px-4 h-10 leading-tight text-blue-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
                Next
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
