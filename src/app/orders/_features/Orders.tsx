"use client";
import {
  Table,
  TableBody,
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
  // SelectTrigger,
  // SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

type foodOrderItems = {
  food: string;
  quantity: number;
};
type user = {
  email: string;
  _id: string;
};
type Order = {
  user: user;
  foodOrderItems: foodOrderItems[];
  createdAt: Date;
  totalPrice: number;
  status: string;
};

const Orders = () => {
  const [order, setOrder] = useState<Order[]>([]);
  const getOrders = async () => {
    const response = await axios.get("http://localhost:4007/food-order");
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
                <TableCell>{element?.user.email}</TableCell>
                <TableCell>
                  <Popover>
                    <PopoverTrigger className="flex gap-3">
                      {element.foodOrderItems.length}
                      <ChevronDown size={16} />
                    </PopoverTrigger>
                    <PopoverContent>
                      Place content for the popover here.
                    </PopoverContent>
                  </Popover>
                </TableCell>
                <TableCell>
                  {element.createdAt.toString().split("T")[0]}
                </TableCell>
                <TableCell className="flex">
                  <p>$</p>
                  {element.totalPrice}
                </TableCell>
                <TableCell>{}</TableCell>
                <TableCell>
                  <Select>
                    {/* <SelectTrigger className="w-fit">
                      {" "}
                      <SelectValue placeholder="Select a delivery state" />
                    </SelectTrigger> */}
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
