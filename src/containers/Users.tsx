import { CustomAlertDialog } from "@/components/common/CustomAlertDialog";
import { DeleteIcon, EditIcon } from "@/components/common/icons";
import { DataTable } from "@/components/generic-components/DataTable";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UserAddEditForm from "@/components/users-components/UserAddEditForm";
import { IUser } from "@/interfaces/IUser";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Users = () => {
  const [isUserAddSlideoutOpen, setIsUserAddSlideoutOpen] = useState(false);
  const [isEditing] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [users, setUsers] = useState([
    {
      UserID: 1,
      FirstName: "John",
      LastName: "Doe",
      PhoneNumber: "1234567890",
      Email: "john@gmail.com",
    },
    {
      UserID: 2,
      FirstName: "Jane",
      LastName: "Doe",
      PhoneNumber: "1234567890",
      Email: "test@test.com",
    },
  ]);

  const userColumns: ColumnDef<IUser>[] = [
    {
      accessorKey: "FirstName",
      header: ({ column }: any) => (
        <Button
          variant="ghost"
          className="font-bold text-primary"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          First Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }: any) => <div>{row.getValue("FirstName")}</div>,
    },
    {
      accessorKey: "LastName",
      header: "Last Name",
      cell: ({ row }: any) => <div>{row.getValue("LastName")}</div>,
    },
    {
      accessorKey: "PhoneNumber",
      header: "Phone Number",
      cell: ({ row }: any) => (
        <div className="">{row.getValue("PhoneNumber")}</div>
      ),
    },
    {
      accessorKey: "Email",
      header: "Email",
      cell: ({ row }: any) => <div>{row.getValue("Email")}</div>,
    },
    {
      id: "UserID",
      header: "Actions",
      cell: ({ row }: any) => {
        const handleDelete = () => {};
        const handleEdit = () => {};
        return (
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={handleEdit}>
              <EditIcon />
            </Button>
            <CustomAlertDialog
              actionText="Delete"
              cancelText="Cancel"
              description="Are you sure you want to delete this user?"
              onAction={handleDelete}
              title="Delete User"
            >
              <Button variant="destructive" size="sm">
                <DeleteIcon />
              </Button>
            </CustomAlertDialog>
          </div>
        );
      },
    },
  ];

  const handleUserAdd = () => {
    console.log("add");
  };

  const handleUserEdit = () => {
    console.log("edit");
  };

  return (
    <Card className="h-full w-full max-w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <h1 className="text-3xl text-primary">Users</h1>
          <div className="flex items-center gap-2">
            <Button
              variant="default"
              onClick={() => setIsUserAddSlideoutOpen(true)}
            >
              Add User <FaPlus />
            </Button>
          </div>
        </CardTitle>
        <CardDescription>Manage your users</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="max-w-full">
          {isFetching ? (
            "Fetching"
          ) : (
            <DataTable
              data={users ? [...users] : []}
              columns={userColumns}
              filterPlaceholder="Search user..."
              showPagination={true}
            />
          )}
        </div>
      </CardContent>
      {isUserAddSlideoutOpen && (
        <UserAddEditForm
          onClose={() => setIsUserAddSlideoutOpen(false)}
          isUserAddSlideoutOpen={isUserAddSlideoutOpen}
          isSubmitting={false}
          onSuccess={() => {
            if (isEditing) {
              handleUserEdit();
            } else {
              handleUserAdd();
            }
          }}
        />
      )}
    </Card>
  );
};

export default Users;
