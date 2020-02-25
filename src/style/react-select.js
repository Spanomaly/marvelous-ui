//Override for react-select native styling
export const reactSelectStyle = {
  control: (base, state) => {
    return {
      ...base,
      background: "rgba(255,255,255,0.25)",
      marginBottom: "163px",
      padding: "11.5px 7px",
      borderRadius: 0,
      fontSize: "16px",
      color: "#ffffff",
      border: "4px solid white",
      color: "white",
      boxShadow: null,
      '&:hover': { borderColor: 'white' },
      letterSpacing: "-0.7px"
    };
  },
  singleValue: base => ( {...base, color: "#fff"} ),
  placeholder: (base) => (
    {color: "#D4D6DB"}
  ),
  indicatorSeparator: () => (
    {display: "none"}
  ),
  menu: base => ({
    ...base,
    borderRadius: 0,
    marginTop: 0,
  }),
  menuList: base => ({
    ...base,
    padding: 0,
    //color: "black"
  }),
  option: (base, state) => {
    const {isSelected, isFocused} = state;
    return {
      ...base,
      backgroundColor: (isSelected || isFocused) ? "white" : "white",
      color: "#79818F",
      padding: "1.6rem",
      borderBottom: "2px solid #79818F",
      '&:hover': { color: '#474D57' },
    };
  },
  indicator: (base, state) => {
    backgroundColor: white
  }
};
