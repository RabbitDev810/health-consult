export const getTimeShort = (timeStamp: string): string => {
  try {
    const date = new Date(timeStamp);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      throw new Error("Invalid Date");
    }

    return new Intl.DateTimeFormat("en-US", {
      timeStyle: "short",
      hourCycle: "h12",
    }).format(date);
  } catch (error) {
    console.error("Error in getTimeShort:", error.message);
    return "Invalid Time";
  }
};

export const getDateMedium = (timeStamp: string): string => {
  try {
    const date = new Date(timeStamp);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      throw new Error("Invalid Date");
    }

    return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
      date
    );
  } catch (error) {
    console.error("Error in getDateMedium:", error.message);
    return "Invalid Date";
  }
};
export const isNone = <T>(value: T | undefined | null): value is T =>
  value !== undefined && value !== null;
