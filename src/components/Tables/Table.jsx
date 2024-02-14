import { Table } from "@mantine/core";
import React from "react";

const ITable = ({ Children }) => {
  return (
    <Table striped>
      <Table.Tbody>{Children}</Table.Tbody>
    </Table>
  );
};

export default ITable;
