import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";

const Index = () => {
  const rosterData = [
    { name: "John Doe", rank: "Sergeant", position: "Squad Leader", status: "Active" },
    { name: "Jane Smith", rank: "Corporal", position: "Medic", status: "On Leave" },
    { name: "Mike Johnson", rank: "Private", position: "Rifleman", status: "Active" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Military Team Roster</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Member
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Rank</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rosterData.map((member, index) => (
            <TableRow key={index}>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.rank}</TableCell>
              <TableCell>{member.position}</TableCell>
              <TableCell>{member.status}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">Edit</Button>
                <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Index;