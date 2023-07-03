export const capitalizeFirstLowercaseRest = (str: string) => {
    return (
      str?.charAt(0).toUpperCase() + str?.slice(1).toLowerCase()
    );
  };


export const getIdsAsString = (obj:any)=> {
  const ids = obj.map((item:any) => item.id);
  return ids.join(',');
}