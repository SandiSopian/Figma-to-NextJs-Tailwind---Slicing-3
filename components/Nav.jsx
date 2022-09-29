import NavItem from "./NavItem";
import classnames from "classnames";

export default function Nav({ mode }) {
  const modes = {
    responsiveSidebar: "invisible md:visible",
  };

  const pickedMode = modes[mode];

  return (
    <div className="flex">
      <div className={classnames("p-6 sm:w-6/12 h-full bg-white z-20 scroll inset-y-0 left-0 md:w-60 md:left-0 peer-focus:left-0 peer:transition ease-out ", pickedMode)}>
        <NavItem />
      </div>

      <div className="sm:w-6/12 bg-transparent"></div>
    </div>
  );
}
