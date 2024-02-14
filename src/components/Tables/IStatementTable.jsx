import React from "react";

import { Table } from "@mantine/core";
// import { incomeStatementData as data} from "@/data/holistic";
import { formatMetric, formatMetricKey } from "@/utils/helpers";

const IStatementTable = ({ data }) => {
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
          i <= 4 ? (
            ""
          ) : (
            <Table.Tr key={key}>
              <Table.Td>{formatMetricKey(key)}</Table.Td>
              <Table.Td>
                {/* {cashflowData[key]} */}
                {data[key]?.toFixed(0).length > 5
                  ? formatMetric(data[key])
                  : data[key]?.toFixed(2)}
              </Table.Td>
            </Table.Tr>
          )
        )}

        {/* {values?.map((prop) => (
          <Table.Tr key={prop?.title} className="text-base ">
            <Table.Td>{prop?.title}</Table.Td>
            <Table.Td>{prop?.value != null ? prop?.value : "---"}</Table.Td>
          </Table.Tr>
        ))} */}
      </Table.Tbody>
    </Table>
  );
};

export default IStatementTable;
