import React from 'react'

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <div>Search 👋</div>
      <div className="flex items-center gap-2">
        <span>Yasser Elshabrawy</span>
        <img src="https://via.placeholder.com/30" className="rounded-full" />
      </div>
    </div>
  );
}
