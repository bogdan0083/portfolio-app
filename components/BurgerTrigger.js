import classNames from "classnames";

const lineClass = "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out";

export default function BurgerTrigger({ active = false, onClick }) {

  return (
    <div className="relative sm:max-w-xl mx-auto sm:hidden ml-auto mr-0 z-30">
      <nav>
        <button className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white" onClick={onClick}>
          <span className="sr-only">Open main menu</span>
          <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span aria-hidden="true" className={classNames({ [lineClass]: true, '-translate-y-1.5': !active, 'rotate-45 translate-y-0': active })}></span>
            <span aria-hidden="true" className={classNames({ [lineClass]: true, 'opacity-0': active })}></span>
            <span aria-hidden="true" className={classNames({ [lineClass]: true, 'translate-y-1.5': !active, '-rotate-45': active })}></span>
          </div>
        </button>
      </nav>
    </div>
  );
}
