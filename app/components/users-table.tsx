import { Button } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useMemo } from "react";
import { useUsers } from "~/contexts/user-context";
import { Error } from "./error";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type UsersTableProps = {
  users: User[];
};

export function UsersTable() {
  const { users, isLoading, error, refetchUsers } = useUsers();

  if (error) return <Error errorMessage={error} />;

  const data = useMemo(() => users, [users]);
  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "username",
        header: "Username",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 200,
      },
      {
        accessorKey: "company.name",
        header: "Company Name",
        size: 200,
      },
    ],

    []
  );
  const table = useMaterialReactTable({
    columns,
    data,
    renderTopToolbarCustomActions: ({ table }) => (
      <Button onClick={() => refetchUsers()}>refetch users</Button>
    ),
    state: {
      isLoading,
    },
  });

  return (
    <main className="m-4">
      <MaterialReactTable table={table} />
    </main>
  );
}
