export const transfersSort = (checkedList) => {
  return checkedList.map((el) => {
    switch (el) {
      case 'Без пересадок':
        return 0;
      case '1 Пересадка':
        return 1;
      case '2 Пересадки':
        return 2;
      case '3 Пересадки':
        return 3;
      default:
        return 0;
    }
  });
};

export const getFiltredTickets = (ticketsData, transfers, sort) => {
  const ticketsFiltred = ticketsData.filter((ticket) => {
    const stops = ticket.segments[0].stops.length;
    for (const transfersCount of transfers) if (stops === transfersCount) return true;
    return false;
  });
  if (sort === 'price') {
    return ticketsFiltred.sort((a, b) => a.price - b.price);
  }
  if (sort === 'fast') {
    return ticketsFiltred.sort(
      (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    );
  }

  return ticketsFiltred;
};

export const getTicketTargetTime = (date, duration) => {
  const dateFrom = new Date(date);
  const dateTo = new Date(dateFrom.getMilliseconds() + duration * 60000);
  return `${dateFrom.getUTCHours() < 10 ? `0${dateFrom.getUTCHours()}` : dateFrom.getUTCHours()}:${
    dateFrom.getUTCMinutes() < 10 ? `0${dateFrom.getUTCMinutes()}` : dateFrom.getUTCMinutes()
  } - ${dateTo.getUTCHours() < 10 ? `0${dateTo.getUTCHours()}` : dateTo.getUTCHours()}:${
    dateTo.getUTCMinutes() < 10 ? `0${dateTo.getUTCMinutes()}` : dateTo.getUTCMinutes()
  }`;
};
