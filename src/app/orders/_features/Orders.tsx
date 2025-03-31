"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Orders = () => {
  const [order, setOrder] = useState();
  const getOrders = async () => {
    const response = await axios.get("http://localhost:4007/food-order");
    console.log(response.data.data);
    setOrder(response.data.data);
  };
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <div className="flex jusitfy-center p-24">
      <Table className="w-full h-fit bg-white rounded-xl">
        <TableHeader>
          <TableRow></TableRow>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>№</TableHead>
            <TableHead>Customers</TableHead>
            <TableHead>Foods</TableHead>
            <TableHead>Dates</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Delivery Address</TableHead>
            <TableHead>Delivery State</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {order?.map((element, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{element.user}</TableCell>
                <TableCell>{}</TableCell>
                <TableCell>{element.createdAt.split("T")[0]}</TableCell>
                <TableCell className="flex">
                  <p>$</p>
                  {element.totalPrice}
                </TableCell>
                <TableCell>{}</TableCell>
                <TableCell>
                  <Select>
                    <SelectTrigger className="w-fit">
                      {" "}
                      <SelectValue placeholder="Select a delivery state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="PENDING">
                          {element.status}
                        </SelectItem>
                        <SelectItem value="CANCELLED">CANCELLED</SelectItem>
                        <SelectItem value="DELIVERED">DELIVERED</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default Orders;
