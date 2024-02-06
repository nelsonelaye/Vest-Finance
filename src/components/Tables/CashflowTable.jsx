import React from "react";
import ITable from "./Table";
import { Table } from "@mantine/core";

const CashflowTable = ({ data }) => {
  const values = [];
  return (
    <Table striped>
      <Table.Thead>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {values?.map((prop) => (
          <Table.Tr key={prop?.title} className="text-base">
            <Table.Td>{prop?.title}</Table.Td>
            <Table.Td>{prop?.value != null ? prop?.value : "---"}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default CashflowTable;
