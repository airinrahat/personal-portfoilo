function FooterBottom() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center pb-10">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        &copy; {new Date().getFullYear()}
        <a
          href="https://github.com/sajjat-rahman-rohan"
          target="__blank"
          className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          Ayrin Rahat Portfolio .
        </a>{" "}
        All Rights Reserved.
      </div>
    </div>
  );
}

export default FooterBottom;
