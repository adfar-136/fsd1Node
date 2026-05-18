import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHead, TableHeader, TableRow,TableBody, TableCell } from "@/components/ui/table";
import Image from "next/image";

export default function Home() {
  return (
    <>
   <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Description</TableHead>
        <TableHead>Age</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Adfar</TableCell>
        <TableCell>FSD Developer</TableCell>
        <TableCell>28</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Rahul</TableCell>
        <TableCell>GEN AI Developer</TableCell>
        <TableCell>22</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Priya</TableCell>
        <TableCell>FSD Developer</TableCell>
        <TableCell>33</TableCell>
      </TableRow>
    </TableBody>
   </Table>
   <Input name="Name" placeholder="Enter your name"/>
   <Input name="Age" placeholder="Enter your age"/>
   <Input name="Description" placeholder="Enter your Description"/>
   <Button type="submit">Click Me</Button>

   </>
  );
}
