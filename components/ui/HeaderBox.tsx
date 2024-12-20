const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: {
  type: string;
  title: string;
  subtext: string;
  user: string;
}) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === "greeting" && (
          <span className="text-[#80bf50]">&nbsp;{user}</span>
        )}
      </h1>
      <p className="header-box-subtext">{subtext}</p>
    </div>
  );
};

export default HeaderBox;
