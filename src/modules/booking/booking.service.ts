import { BookingModel, IBooking } from "./booking.model";


export const BookingServices = {
    async createBooking(payload: IBooking) {
        const booking= BookingModel.create(payload);
        return (await booking).populate("Customer Service Slot");
    }
}