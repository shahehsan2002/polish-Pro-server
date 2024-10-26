
import { ISlot } from "./slot.interface";
import SlotModel from "./slot.model";

// Helper function to convert "HH:MM" time format to total minutes
const convertTimeToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
};

// Helper function to convert minutes back to "HH:MM" format
const convertMinutesToTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60).toString().padStart(2, "0");
    const mins = (minutes % 60).toString().padStart(2, "0");
    return `${hours}:${mins}`;
};

// Create multiple slots for a service on a specified date
const createSlots = async (
    service: string,
    date: string,
    startTime: string,
    endTime: string,
    duration: number
): Promise<ISlot[]> => {
    const slots: ISlot[] = [];
    const startMinutes = convertTimeToMinutes(startTime);
    const endMinutes = convertTimeToMinutes(endTime);

    for (let time = startMinutes; time < endMinutes; time += duration) {
        const slotStartTime = convertMinutesToTime(time);
        const slotEndTime = convertMinutesToTime(time + duration);

        const newSlot = await SlotModel.create({
            service,
            date,
            startTime: slotStartTime,
            endTime: slotEndTime,
            isBooked: "available",
        });

        slots.push(newSlot);
    }

    return slots;
};

// Get all available slots for a service on a specified date
const getAvailableSlots = async (
    serviceId?: string,
    date?: string
): Promise<ISlot[]> => {
    const query: any = { isBooked: "available" };
    if (serviceId) query.service = serviceId;
    if (date) query.date = date;
    return await SlotModel.find(query).populate("service");
};

export const SlotServices = {
    createSlots,
    getAvailableSlots,
};
