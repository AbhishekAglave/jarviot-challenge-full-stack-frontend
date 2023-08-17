import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/joy/Button";
import Table from "@mui/joy/Table";
import { Eye, Download } from "react-feather";
import { Avatar, Chip, Link } from "@mui/joy";

function Report() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: 20,
          alignItems: "center"
        }}
      >
        <Button
          onClick={async (event) => {
            setIsLoading(true);
            const res = await axios.get("/api/drive/files");
            setData(res.data);
            setIsLoading(false);
          }}
        >
          {isLoading ? "Scanning..." : "Scan Files"}
        </Button>
        <div>
          Total Files :{" "}
          <Chip color="primary" variant="soft">
            {data.reduce((acc, obj) => {
              return acc + 1;
            }, 0)}
          </Chip>
        </div>
        <div>
          Shared Files :{" "}
          <Chip color="primary" variant="soft">
            {data.reduce((acc, obj) => {
              if (obj.shared) {
                return acc + 1;
              }
              return acc;
            }, 0)}
          </Chip>
        </div>
        <div>
          Risk Count :{" "}
          <Chip color="danger" variant="soft">
            {data.reduce((acc, obj) => {
              if (obj.shared) {
                return acc + 1;
              }
              return acc;
            }, 0)}
          </Chip>
        </div>
      </div>

      <Table
        sx={{
          "& thead th:nth-child(1)": { width: "50px" },
          "& thead th:nth-child(2)": { width: "30%" },
          "& thead th:nth-child(6)": { width: "50px" },
          "& thead th:nth-child(7)": { width: "80px" }
        }}
      >
        <thead>
          <tr>
            <th>Icon</th>
            <th>File Name</th>
            <th>Type</th>
            <th>Shared</th>
            <th>Size (KB)</th>
            <th>View</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>
                <Avatar
                  alt="rowIcon"
                  size="sm"
                  src={row.iconLink}
                  variant="plain"
                />
              </td>
              <td>{row.title}</td>
              <td>
                {row.fileExtension
                  ? row.fileExtension
                  : row.fileSize
                  ? "google doc"
                  : "folder"}
              </td>
              <td>
                {row.shared ? (
                  <Chip color="warning" variant="soft" size="sm">
                    Shared
                  </Chip>
                ) : (
                  <Chip color="primary" variant="soft" size="sm">
                    Not Shared
                  </Chip>
                )}
              </td>
              <td>{row.fileSize / 100}</td>
              <td>
                <Link
                  href={row.alternateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Eye />
                </Link>
              </td>
              <td>
                <Link
                  href={row.webContentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Report;
