import React from "react";
import ITable from "./Table";
import { Table } from "@mantine/core";
// import { balanceSheetData as data } from "@/data/holistic";
import { formatMetric, formatMetricKey } from "@/utils/helpers";

const BSheetTable = ({ data }) => {
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
        {Object?.keys(data)?.map((key, i) =>
          i <= 3 ? (
            ""
          ) : (
            <Table.Tr key={key}>
              <Table.Td>{formatMetricKey(key)}</Table.Td>
              <Table.Td>{formatMetric(data[key])}</Table.Td>
            </Table.Tr>
          )
        )}

        {/* {values?.map((prop) => (
          <Table.Tr key={prop?.title} className="text-base">
            <Table.Td>{}</Table.Td>
            <Table.Td>{prop?.value != null ? prop?.value : "---"}</Table.Td>
          </Table.Tr>
        ))} */}
      </Table.Tbody>
    </Table>
  );
};

export default BSheetTable;
