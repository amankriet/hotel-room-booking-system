export const convertToISODate = (date) => {
    const isoDate = new Date(date);
    isoDate.setUTCHours(0, 0, 0, 0);
    return isoDate.toISOString();
};