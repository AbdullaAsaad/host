import React from "react";


function Card() {
  return (
    <button className="w-96 h-96 hover:opacity-90">
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-xs">
          <span>
            <img
              className="rounded-t-lg "
              src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
              alt=""
            />
          </span>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">steam</h5>
          </div>
        </div>
      </div>
    </button>
  );
}

export default Card;
