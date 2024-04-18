export const Rectangle = ({ x, y, width, height, color }) => {
    const style = {
      left: x + 'px',
      top: y + 'px',
      width: width + 'px',
      height: height + 'px',
      backgroundColor: color,
    };
    return <div className="rectangle" style={style}></div>;
  };