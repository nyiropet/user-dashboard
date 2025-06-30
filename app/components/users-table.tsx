export type Users = {
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
  users: Array<Users>;
};

export function UsersTable({ users }: UsersTableProps) {
  return (
    <main>
      <h1>User dashboard</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.username}) - {user.email}
          </li>
        ))}
      </ul>
    </main>
  );
}
