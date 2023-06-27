import { MAX_WITDH_CONTENT } from "@/constants/page";

function LayoutContent({ children }) {
  return (
    <div className="w-full flex justify-center">
      <div className={`w-[${MAX_WITDH_CONTENT}] px-5`}>{children}</div>
    </div>
  );
}

export default LayoutContent;
