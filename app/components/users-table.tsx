import { Button } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useMemo } from "react";
import { useUsers } from "~/contexts/user-context";
import { Error } from "./error";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
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
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

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
    muiTableBodyRowProps: ({ row }) => ({
      onClick: () => setSelectedUser(row.original),
      style: { cursor: "pointer" },
    }),
  });

  return (
    <main className="m-4">
      <MaterialReactTable table={table} />
      <Dialog open={!!selectedUser} onClose={() => setSelectedUser(null)}>
        <DialogTitle>User Information</DialogTitle>
        <DialogContent>
          {selectedUser && (
            <>
              <Typography>Name: {selectedUser.name}</Typography>
              <Typography>Username: {selectedUser.username}</Typography>
              <Typography>Email: {selectedUser.email}</Typography>
              <Typography>Phone: {selectedUser.phone}</Typography>
              <Typography>Website: {selectedUser.website}</Typography>
              <Typography>Company: {selectedUser.company.name}</Typography>
              <Typography>Address: {selectedUser.address.city}</Typography>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedUser(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </main>
  );
}
