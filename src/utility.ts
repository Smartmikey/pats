export const capitalizeFirstLowercaseRest = (str: string) => {
  return (
    str?.charAt(0).toUpperCase() + str?.slice(1).toLowerCase()
  );
};


export const getIdsAsString = (obj: any) => {
  const ids = obj.map((item: any) => item.id);
  return ids.join(',');
}

export const getUserMessages = (userId: number, messages: any[]): any[] => {
  const filteredMessages = messages?.filter(
    (message, index, self) =>
      (message.sender_id === userId) || //&& !self.find((m) => m.recipient_id === message.recipient_id)) ||
      (message.recipient_id === userId) // && !self.find((m) => m.sender_id === message.sender_id))
  );

  // console.log("filteredMessages", filteredMessages);


  const uniqueResults = filteredMessages?.reduce((unique, message) => {
    const { sender_id, recipient_id } = message;

    const existingMatch = unique.find(
      (result: any) => (result.sender_id === sender_id && result.recipient_id === recipient_id) ||
        (result.sender_id === recipient_id && result.recipient_id === sender_id)
    );

    if (!existingMatch) {
      if (message.sender_id !== userId) {
        unique.push({ id: sender_id, name: message.sender.name });
      } else if (message.recipient_id !== userId) {
        unique.push({ id: recipient_id, name: message.recipient.name });
      }
    }

    return unique;
  }, []);

  return removeDuplicates(uniqueResults, 'id');
};


const removeDuplicates = (array: any[], property: string): any[] => {
  const uniqueValues = new Set();

  return array?.filter((item) => {
    const value = item[property];

    if (!uniqueValues.has(value)) {
      uniqueValues.add(value);
      return true;
    }

    return false;
  });
};