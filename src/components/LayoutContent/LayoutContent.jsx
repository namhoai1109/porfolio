function LayoutContent({ children }) {
  return (
    <div className="w-full flex justify-center">
      <div className={`w-[1280px] px-5`}>{children}</div>
    </div>
  );
}

export default LayoutContent;
