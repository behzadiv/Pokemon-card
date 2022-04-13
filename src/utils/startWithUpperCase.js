export const startWithUpperCase = (name)=>{
    const changedName = name.split("")[0].toUpperCase() + name.slice("1"); //chenge first letter to upperCase
    return changedName;
}