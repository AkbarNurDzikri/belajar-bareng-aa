interface Props {
  showMenu: boolean;
}

export const NavMenu = ({ showMenu }: Props) => {
  return (
    <div
      className={`absolute top-16 md:top-20 left-0 bg-linear-to-br from-blue-300 to-violet-500 p-5 transition-all duration-300 ease-in-out z-10 ${
        showMenu
          ? "opacity-100 translate-y-0 max-h-96"
          : "opacity-0 -translate-y-5 max-h-0"
      }`}
    >
      {" "}
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, vel
      perspiciatis. Similique error iste iusto molestias alias ex cumque ipsa
      doloribus amet vero, voluptatem minima aperiam? Animi iure doloremque
      expedita.
    </div>
  );
};
