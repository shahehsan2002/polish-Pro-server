export interface ISlot {
  service: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: "available" | "booked" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
}
