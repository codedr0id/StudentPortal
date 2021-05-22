import React, { useEffect, useState } from "react";
import { MDBDataTableV5, MDBBadge } from "mdbreact";
import { getStudents } from "../apicalls";

const ShowUsers = () => {
  const [students, setStudents] = useState([]);

  function compare(a, b) {
    if (a.percentage < b.percentage) {
      return 1;
    }
    if (a.percentage > b.percentage) {
      return -1;
    }
    return 0;
  }

  const preload = () => {
    getStudents().then((data) => {
      if (data !== undefined) {
        if (data.error) {
          console.log(data.error);
        } else {
          setStudents(data.sort(compare));
        }
      }
    });
  };

  useEffect(() => {
    preload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        width: "auto",
      },
      {
        label: "Roll No",
        field: "rollno",
        width: "auto",
      },
      {
        label: "Total Marks",
        field: "total",
        width: "auto",
      },
      {
        label: "Percentage",
        field: "percentage",
        sort: "desc",
        width: "auto",
      },
    ],
    rows: students,
  };

  const badgesData = {
    columns: [
      {
        label: "Rank",
        field: "badge",
      },
      ...data.columns,
    ],
    rows: [
      ...data.rows.map((row, order) => ({
        ...row,
        badge: (
          <MDBBadge
            pill
            color="primary"
            className="p-1 px-2"
            key={order}
            searchvalue={order}
          >
            RANK: {order + 1}
          </MDBBadge>
        ),
      })),
    ],
  };

  return (
    <div>
      <h1 className="text-center">Leaderboard</h1>
      <MDBDataTableV5
        hover
        className="text-center"
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={badgesData}
        searchTop
        pagingTop
        searchBottom={false}
      />
    </div>
  );
};

export default ShowUsers;
