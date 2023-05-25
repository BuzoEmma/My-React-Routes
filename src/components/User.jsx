import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

function User() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <div>User 1</div>
      <div>User 2</div>
      <div>User 3</div>
      <div>User 4</div>
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active User
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {showActiveUsers ? (<div>Showing Active users</div>) : (<div>Show All Users</div>)}
    <Outlet/>
    </div>
  );
}

export default User;
