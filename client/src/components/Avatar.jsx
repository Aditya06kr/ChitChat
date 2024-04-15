import React, { useEffect, useState } from "react";

const Avatar = ({ username, id }) => {
    const [color,setColor]=useState(0);
  const colors = [
    "bg-teal-200",
    "bg-red-200",
    "bg-green-200",
    "bg-purple-200",
    "bg-blue-200",
    "bg-yellow-200",
    "bg-orange-200",
    "bg-fuchsia-200",
    "bg-rose-200",
    "bg-slate-200",
    "bg-amber-100",
    "bg-lime-200",
  ];
  useEffect(() => {
    const userIdBase10 = parseInt(id, 16);
    const ind=userIdBase10%(colors.length);
    setColor(colors[ind]);
  }, []);

  return (
    <div
      className={`${color} w-8 h-8 rounded-full flex items-center justify-center`}
    >
      {username[0]}
    </div>
  );
};

export default Avatar;
